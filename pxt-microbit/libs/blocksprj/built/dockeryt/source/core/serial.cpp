#include "pxt.h"

#define MICROBIT_SERIAL_READ_BUFFER_LENGTH 64

// make sure USB_TX and USB_RX don't overlap with other pin ids
enum SerialPin {
    P0 = MICROBIT_ID_IO_P0,
    P1 = MICROBIT_ID_IO_P1,
    P2 = MICROBIT_ID_IO_P2,
    P8 = MICROBIT_ID_IO_P8,
    P12 = MICROBIT_ID_IO_P12,
    P13 = MICROBIT_ID_IO_P13,
    P14 = MICROBIT_ID_IO_P14,
    P15 = MICROBIT_ID_IO_P15,
    P16 = MICROBIT_ID_IO_P16,
    USB_TX = 1001,
    USB_RX = 1002
};

enum BaudRate {
  //% block=115200
  BaudRate115200 = 115200,
  //% block=57600
  BaudRate57600 = 57600,
  //% block=38400
  BaudRate38400 = 38400,
  //% block=31250
  BaudRate31250 = 31250,
  //% block=28800
  BaudRate28800 = 28800,
  //% block=19200
  BaudRate19200 = 19200,
  //% block=14400
  BaudRate14400 = 14400,
  //% block=9600
  BaudRate9600 = 9600,
  //% block=4800
  BaudRate4800 = 4800,
  //% block=2400
  BaudRate2400 = 2400,
  //% block=1200
  BaudRate1200 = 1200,
  //% block=300
  BaudRate300 = 300
};

enum Delimiters {
    //% block="new line"
    NewLine = 1,
    //% block=","
    Comma = 2,
    //% block="$"
    Dollar = 3,
    //% block=":"
    Colon = 4,
    //% block="."
    Fullstop = 5,
    //% block="#"
    Hash = 6,
};

//
//
namespace serial {
    // note that at least one // followed by % is needed per declaration!

//
//
//
//
//
//
//
    String readUntil(String delimiter) {
      return PSTR(uBit.serial.readUntil(MSTR(delimiter)));
    }

//
//
//
//
//
//
    String readString() {
      int n = uBit.serial.getRxBufferSize();
      if (n == 0) return mkString("", 0);
      return PSTR(uBit.serial.read(n, MicroBitSerialMode::ASYNC));
    }

//
//
//
//
//
//
    void onDataReceived(String delimiters, Action body) {
      uBit.serial.eventOn(MSTR(delimiters));
      registerWithDal(MICROBIT_ID_SERIAL, MICROBIT_SERIAL_EVT_DELIM_MATCH, body);
      // lazy initialization of serial buffers
      uBit.serial.read(MicroBitSerialMode::ASYNC);
    }

//
//
//
//
//
//
//
    void writeString(String text) {
      if (!text) return;

      uBit.serial.send(MSTR(text));
    }

//
//
//
//
//
    void writeBuffer(Buffer buffer) {
      if (!buffer) return;

      uBit.serial.send(buffer->data, buffer->length);
    }

//
//
//
//
//
//
    Buffer readBuffer(int length) {
      if (length <= 0)
        length = MICROBIT_SERIAL_READ_BUFFER_LENGTH;

      auto buf = mkBuffer(NULL, length);
      int read = uBit.serial.read(buf->data, buf->length);
      if (read != length) {
        auto prev = buf;
        buf = mkBuffer(buf->data, read);
        decrRC(prev);
      }

      return buf;
    }

    bool tryResolvePin(SerialPin p, PinName& name) {
      switch(p) {
        case SerialPin::USB_TX: name = USBTX; return true;
        case SerialPin::USB_RX: name = USBRX; return true;
        default: 
          auto pin = getPin(p); 
          if (NULL != pin) {
            name = pin->name;
            return true;
          }
      }
      return false;
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
//
//
//
//
//
//
    void redirect(SerialPin tx, SerialPin rx, BaudRate rate) {
      PinName txn;
      PinName rxn;
      if (tryResolvePin(tx, txn) && tryResolvePin(rx, rxn))
        uBit.serial.redirect(txn, rxn);
      uBit.serial.baud((int)rate);
    }

//
//
//
//
//
    void redirectToUSB() {
      uBit.serial.redirect(USBTX, USBRX);
      uBit.serial.baud(115200);
    }
}

