#include "pxt.h"

using namespace pxt;

#define MAX_FIELD_NAME_LENGTH 12
#define MAX_FIELD_DOUBLE_NAME_LENGTH 8
#define MAX_PAYLOAD_LENGTH 20
#define PACKET_PREFIX_LENGTH 9
#define VALUE_PACKET_NAME_LEN_OFFSET 13
#define DOUBLE_VALUE_PACKET_NAME_LEN_OFFSET 17


// Packet Spec:
// | 0              | 1 ... 4       | 5 ... 8           | 9 ... 28
// ----------------------------------------------------------------
// | packet type    | system time   | serial number     | payload
//
// Serial number defaults to 0 unless enabled by user

// payload: number (9 ... 12)
#define PACKET_TYPE_NUMBER 0

// payload: number (9 ... 12), name length (13), name (14 ... 26)
#define PACKET_TYPE_VALUE 1

// payload: string length (9), string (10 ... 28)
#define PACKET_TYPE_STRING 2

// payload: buffer length (9), buffer (10 ... 28)
#define PACKET_TYPE_BUFFER 3

// payload: number (9 ... 16)
#define PACKET_TYPE_DOUBLE 4

// payload: number (9 ... 16), name length (17), name (18 ... 26)
#define PACKET_TYPE_DOUBLE_VALUE 5

//
namespace radio {

    // -------------------------------------------------------------------------
    // Radio
    // -------------------------------------------------------------------------
    bool radioEnabled = false;
    bool transmitSerialNumber = false;

    PacketBuffer packet;

    uint8_t type;
    uint32_t time;
    uint32_t serial;
    int ivalue;
    double dvalue;
    String msg; // may be NULL before first packet
    Buffer bufMsg; // may be NULL before first packet

    int radioEnable() {
        int r = uBit.radio.enable();
        if (r != MICROBIT_OK) {
            uBit.panic(43);
            return r;
        }
        if (!radioEnabled) {
            uBit.radio.setGroup(pxt::programHash());
            uBit.radio.setTransmitPower(6); // start with high power by default
            radioEnabled = true;
        }
        return r;
    }

//
//
//
//
//
//
//
//
    void raiseEvent(int src, int value) {
        if (radioEnable() != MICROBIT_OK) return;
        uBit.radio.event.eventReceived(MicroBitEvent(src, value, CREATE_ONLY));
    }

    void setPacketPrefix(uint8_t* buf, int type) {
        // prefix: type (0), time (1..4), serial (5..8)
        uint32_t t = system_timer_current_time();
        uint32_t sn = transmitSerialNumber ? microbit_serial_number() : 0;

        buf[0] = (uint8_t) type;
        memcpy(buf + 1, &t, 4);
        memcpy(buf + 5, &sn, 4);
    }

    uint8_t copyStringValue(uint8_t* buf, String data, uint8_t maxLength) {
        uint8_t len = min_(maxLength, data->length);

        // One byte for length of the string
        buf[0] = len;

        if (len > 0) {
            memcpy(buf + 1, data->data, len);
        }
        return len + 1;
    }

    String getStringValue(uint8_t* buf, uint8_t maxLength) {
        // First byte is the string length
        uint8_t len = min_(maxLength, buf[0]);
        return mkString((char*)buf + 1, len);
    }

    uint8_t copyBufferValue(uint8_t* buf, Buffer data, uint8_t maxLength) {
        uint8_t len = min_(maxLength, data->length);

        // One byte for length of the buffer
        buf[0] = len;
        if (len > 0) {
            memcpy(buf + 1, data->data, len);
        }
        return len + 1;
    }

    Buffer getBufferValue(uint8_t* buf, uint8_t maxLength) {
        // First byte is the buffer length
        uint8_t len = min_(maxLength, buf[0]);
        // skip first byte
        return mkBuffer(buf + 1, len);
    }

    void writePacketAsJSON(uint8_t tp, int iv, double dv, int s, int t, String m, Buffer b) {
        // Convert the packet to JSON and send over serial
        uBit.serial.send("{");
        uBit.serial.send("\"t\":");
        uBit.serial.send(t);
        uBit.serial.send(",\"s\":");
        uBit.serial.send(s);
        if ((tp == PACKET_TYPE_STRING || tp == PACKET_TYPE_VALUE) && NULL != m) {
            uBit.serial.send(",\"n\":\"");
            uBit.serial.send((uint8_t*)m->data, m->length);
            uBit.serial.send("\"");
        }
        if (tp == PACKET_TYPE_BUFFER && NULL != b) {
            uBit.serial.send(",\"b\":\"");
            // TODO: proper base64 encoding
            uBit.serial.send(b->data, b->length);
            uBit.serial.send("\"");
        }
        if (tp == PACKET_TYPE_NUMBER || tp == PACKET_TYPE_VALUE) {
            uBit.serial.send(",\"v\":");
            uBit.serial.send(iv);
        } else if (tp == PACKET_TYPE_DOUBLE || tp == PACKET_TYPE_DOUBLE_VALUE) {
            uBit.serial.send(",\"v\":");
            TNumber td = fromDouble(dv);
            String sd = numops::toString(td);
            uBit.serial.send((uint8_t*)sd->data, sd->length);
            decrRC(sd);
        }
        uBit.serial.send("}\r\n");
    }

//
//
//
//
//
    void receivePacket(bool writeToSerial) {
        PacketBuffer p = uBit.radio.datagram.recv();

        uint8_t* buf = p.getBytes();
        uint8_t tp;
        int t;
        int s;
        int iv = 0;
        double dv = 0;
        String m = NULL;
        Buffer b = NULL;

        memcpy(&tp, buf, 1);
        memcpy(&t, buf + 1, 4);
        memcpy(&s, buf + 5, 4);

        switch(tp) {
            case PACKET_TYPE_STRING:
                m = getStringValue(buf + PACKET_PREFIX_LENGTH, MAX_PAYLOAD_LENGTH - 1);
                break;
            case PACKET_TYPE_BUFFER:
                b = getBufferValue(buf + PACKET_PREFIX_LENGTH, MAX_PAYLOAD_LENGTH - 1);
                break;
            case PACKET_TYPE_DOUBLE:
            case PACKET_TYPE_DOUBLE_VALUE:
                memcpy(&dv, buf + PACKET_PREFIX_LENGTH, sizeof(double));
                if (tp == PACKET_TYPE_DOUBLE_VALUE) {
                    m = getStringValue(buf + DOUBLE_VALUE_PACKET_NAME_LEN_OFFSET, MAX_FIELD_DOUBLE_NAME_LENGTH);
                }
                break;
            case PACKET_TYPE_NUMBER:
            case PACKET_TYPE_VALUE:
                memcpy(&iv, buf + PACKET_PREFIX_LENGTH, sizeof(int));
                if (tp == PACKET_TYPE_VALUE) {
                    m = getStringValue(buf + VALUE_PACKET_NAME_LEN_OFFSET, MAX_FIELD_NAME_LENGTH);
                }
                break;
            default: // unknown packet
                return;
        }

        if (NULL == m)
            m = mkString("", 0);
        if (NULL == b)
            b = mkBuffer(NULL, 0);

        if (!writeToSerial) {
            // Refresh global packet
            packet = p;
            type = tp;
            time = t;
            serial = s;
            ivalue = iv;
            dvalue = dv;
            decrRC(msg);
            decrRC(bufMsg);
            msg = m;
            bufMsg = b;
        }
        else {
            writePacketAsJSON(tp, iv, dv, s, t, m, b);
            decrRC(m);
            decrRC(b);
        }
    }

//
//
//
//
//
//
    void sendNumber(TNumber value) {
        if (radioEnable() != MICROBIT_OK) return;

        int iv = toInt(value);
        double dv = toDouble(value);
        if (iv == dv) {
            uint8_t length = PACKET_PREFIX_LENGTH + sizeof(int);
            uint8_t buf[length];
            memset(buf, 0, length);
            setPacketPrefix(buf, PACKET_TYPE_NUMBER);
            memcpy(buf + PACKET_PREFIX_LENGTH, &iv, sizeof(int));
            uBit.radio.datagram.send(buf, length);
        } else {
            uint8_t length = PACKET_PREFIX_LENGTH + sizeof(double);
            uint8_t buf[length];
            memset(buf, 0, length);
            setPacketPrefix(buf, PACKET_TYPE_DOUBLE);
            memcpy(buf + PACKET_PREFIX_LENGTH, &dv, sizeof(double));
            uBit.radio.datagram.send(buf, length);
        }
    }

//
//
//
//
//
//
//
//
//
    void sendValue(String name, TNumber value) {
        if (radioEnable() != MICROBIT_OK) return;

        uint8_t buf[32];
        memset(buf, 0, 32);

        int iv = toInt(value);
        double dv = toDouble(value);
        if (iv == dv) {
            setPacketPrefix(buf, PACKET_TYPE_VALUE);
            memcpy(buf + PACKET_PREFIX_LENGTH, &iv, sizeof(int));

            int stringLen = copyStringValue(buf + VALUE_PACKET_NAME_LEN_OFFSET, name, MAX_FIELD_DOUBLE_NAME_LENGTH);
            uBit.radio.datagram.send(buf, VALUE_PACKET_NAME_LEN_OFFSET + stringLen);
        } else {
            setPacketPrefix(buf, PACKET_TYPE_DOUBLE_VALUE);
            memcpy(buf + PACKET_PREFIX_LENGTH, &dv, sizeof(double));

            int stringLen = copyStringValue(buf + DOUBLE_VALUE_PACKET_NAME_LEN_OFFSET, name, MAX_FIELD_NAME_LENGTH);
            uBit.radio.datagram.send(buf, DOUBLE_VALUE_PACKET_NAME_LEN_OFFSET + stringLen);
        }
    }

//
//
//
//
//
//
//
//
    void sendString(String msg) {
        if (radioEnable() != MICROBIT_OK || NULL == msg) return;

        uint8_t buf[32];
        memset(buf, 0, 32);

        setPacketPrefix(buf, PACKET_TYPE_STRING);
        int stringLen = copyStringValue(buf + PACKET_PREFIX_LENGTH, msg, MAX_PAYLOAD_LENGTH - 1);

        uBit.radio.datagram.send(buf, PACKET_PREFIX_LENGTH + stringLen);
    }

//
//
//
//
//
//
//
    void sendBuffer(Buffer msg) {
        if (radioEnable() != MICROBIT_OK || NULL == msg) return;

        uint8_t buf[32];
        memset(buf, 0, 32);

        setPacketPrefix(buf, PACKET_TYPE_BUFFER);
        int bufLen = copyBufferValue(buf + PACKET_PREFIX_LENGTH, msg, MAX_PAYLOAD_LENGTH - 1);

        uBit.radio.datagram.send(buf, PACKET_PREFIX_LENGTH + bufLen);
    }


//
//
//
//
//
//
//
//
    void writeValueToSerial() {
        if (radioEnable() != MICROBIT_OK) return;
        receivePacket(true);
    }

//
//
//
//
//
//
//
//
    void writeReceivedPacketToSerial() {
        if (radioEnable() != MICROBIT_OK) return;
        writePacketAsJSON(type, ivalue, dvalue, (int) serial, (int) time, msg, bufMsg);
    }

    TNumber readNumber() {
        if (type == PACKET_TYPE_NUMBER || type == PACKET_TYPE_VALUE)
            return fromInt(ivalue);
        else if (type == PACKET_TYPE_DOUBLE || type == PACKET_TYPE_DOUBLE_VALUE)
            return fromDouble(dvalue);
        else 
            return fromInt(0);
    }

//
//
//
//
//
//
//
//
    TNumber receiveNumber()
    {
        if (radioEnable() != MICROBIT_OK) return 0;
        receivePacket(false);
        return readNumber();
    }

//
//
//
//
//
//
//
    void onDataReceived(Action body) {
        if (radioEnable() != MICROBIT_OK) return;
        registerWithDal(MICROBIT_ID_RADIO, MICROBIT_RADIO_EVT_DATAGRAM, body);
        // make sure the receive buffer has a free spot
        receivePacket(false);
    }


//
//
//
//
//
//
//
//
    String receiveString() {
        if (radioEnable() != MICROBIT_OK) return mkString("", 0);
        receivePacket(false);
        return msg;
    }

//
//
//
//
//
//
//
//
//
    int receivedSignalStrength() {
        if (radioEnable() != MICROBIT_OK) return 0;
        return packet.getRSSI();
    }

//
//
//
//
//
//
//
//
    void setGroup(int id) {
        if (radioEnable() != MICROBIT_OK) return;
        uBit.radio.setGroup(id);
    }

//
//
//
//
//
//
//
//
//
    void setTransmitPower(int power) {
        if (radioEnable() != MICROBIT_OK) return;
        uBit.radio.setTransmitPower(power);
    }

//
//
//
//
//
//
//
//
    void setTransmitSerialNumber(bool transmit) {
        if (radioEnable() != MICROBIT_OK) return;
        transmitSerialNumber = transmit;
    }

//
//
//
//
//
//
    TNumber receivedNumber() {
        if (radioEnable() != MICROBIT_OK) return 0;
        return readNumber();
    }

//
//
//
//
//
//
    uint32_t receivedSerial() {
        if (radioEnable() != MICROBIT_OK) return 0;
        return serial;
    }

//
//
//
//
//
//
    String receivedString() {
        if (radioEnable() != MICROBIT_OK || NULL == msg) return mkString("", 0);
        incrRC(msg);
        return msg;
    }

//
//
//
//
//
//
    Buffer receivedBuffer() {
        if (radioEnable() != MICROBIT_OK || NULL == bufMsg) return mkBuffer(NULL, 0);
        incrRC(bufMsg);
        return bufMsg;
    }

//
//
//
//
//
//
    uint32_t receivedTime() {
        if (radioEnable() != MICROBIT_OK) return 0;
        return time;
    }
}

