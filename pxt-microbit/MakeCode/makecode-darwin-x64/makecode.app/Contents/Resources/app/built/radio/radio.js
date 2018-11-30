var RadioPacketProperty;
(function (RadioPacketProperty) {
    //% blockIdentity=radio._packetProperty
    //% block="signal strength"
    RadioPacketProperty[RadioPacketProperty["SignalStrength"] = 2] = "SignalStrength";
    //% blockIdentity=radio._packetProperty
    //% block="time"
    RadioPacketProperty[RadioPacketProperty["Time"] = 0] = "Time";
    //% block="serial number"
    //% blockIdentity=radio._packetProperty
    RadioPacketProperty[RadioPacketProperty["SerialNumber"] = 1] = "SerialNumber";
})(RadioPacketProperty || (RadioPacketProperty = {}));
/**
 * Communicate data using radio packets
 */
//% color=#E3008C weight=96 icon="\uf012"
var radio;
(function (radio) {
    var Packet = /** @class */ (function () {
        function Packet() {
        }
        return Packet;
    }());
    radio.Packet = Packet;
    /**
     * Registers code to run when the radio receives a packet. Also takes the
     * received packet from the radio queue.
     */
    //% help=radio/on-data-packet-received blockHandlerKey="radioreceived" deprecated=true
    //% mutate=objectdestructuring
    //% mutateText=Packet
    //% mutateDefaults="receivedNumber;receivedString:name,receivedNumber:value;receivedString"
    //% blockId=radio_on_packet block="on radio received" blockGap=8
    function onDataPacketReceived(cb) {
        radio.onDataReceived(function () {
            radio.receiveNumber();
            var packet = new Packet();
            packet.receivedNumber = radio.receivedNumber();
            packet.time = radio.receivedTime();
            packet.serial = radio.receivedSerial();
            packet.receivedString = radio.receivedString();
            packet.receivedBuffer = radio.receivedBuffer();
            packet.signal = radio.receivedSignalStrength();
            lastPacket = packet;
            cb(packet);
        });
    }
    radio.onDataPacketReceived = onDataPacketReceived;
    /**
     * Registers code to run when the radio receives a number.
     */
    //% help=radio/on-received-number blockHandlerKey="radioreceived"
    //% blockId=radio_on_number block="on radio received" blockGap=16
    //% useLoc="radio.onDataPacketReceived"
    function onReceivedNumber(cb) {
        radio.onDataReceived(function () {
            radio.receiveNumber();
            var packet = new Packet();
            packet.time = radio.receivedTime();
            packet.serial = radio.receivedSerial();
            packet.signal = radio.receivedSignalStrength();
            packet.receivedNumber = radio.receivedNumber();
            lastPacket = packet;
            cb(packet.receivedNumber);
        });
    }
    radio.onReceivedNumber = onReceivedNumber;
    /**
     * Registers code to run when the radio receives a key value pair.
     */
    //% help=radio/on-received-value blockHandlerKey="radioreceived"
    //% blockId=radio_on_value block="on radio received" blockGap=16
    //% useLoc="radio.onDataPacketReceived"
    function onReceivedValue(cb) {
        radio.onDataReceived(function () {
            radio.receiveNumber();
            var packet = new Packet();
            packet.time = radio.receivedTime();
            packet.serial = radio.receivedSerial();
            packet.signal = radio.receivedSignalStrength();
            packet.receivedNumber = radio.receivedNumber();
            packet.receivedString = radio.receivedString();
            lastPacket = packet;
            cb(packet.receivedString, packet.receivedNumber);
        });
    }
    radio.onReceivedValue = onReceivedValue;
    /**
     * Registers code to run when the radio receives a string.
     */
    //% help=radio/on-received-string blockHandlerKey="radioreceived"
    //% blockId=radio_on_string block="on radio received" blockGap=16
    //% useLoc="radio.onDataPacketReceived"
    function onReceivedString(cb) {
        radio.onDataReceived(function () {
            radio.receiveNumber();
            var packet = new Packet();
            packet.time = radio.receivedTime();
            packet.serial = radio.receivedSerial();
            packet.signal = radio.receivedSignalStrength();
            packet.receivedString = radio.receivedString();
            lastPacket = packet;
            cb(packet.receivedString);
        });
    }
    radio.onReceivedString = onReceivedString;
    /**
     * Registers code to run when the radio receives a buffer.
     */
    //% help=radio/on-received-buffer blockHandlerKey="radioreceived" blockHidden=1
    //% blockId=radio_on_buffer block="on radio received" blockGap=16
    //% useLoc="radio.onDataPacketReceived"
    function onReceivedBuffer(cb) {
        radio.onDataReceived(function () {
            radio.receiveNumber();
            var packet = new Packet();
            packet.time = radio.receivedTime();
            packet.serial = radio.receivedSerial();
            packet.signal = radio.receivedSignalStrength();
            packet.receivedBuffer = radio.receivedBuffer();
            lastPacket = packet;
            cb(packet.receivedBuffer);
        });
    }
    radio.onReceivedBuffer = onReceivedBuffer;
    var lastPacket;
    /**
     * Returns properties of the last radio packet received.
     * @param type the type of property to retrieve from the last packet
     */
    //% help=radio/received-packet
    //% weight=11 blockGap=8
    //% blockId=radio_received_packet block="received packet %type=radio_packet_property" blockGap=16
    function receivedPacket(type) {
        if (lastPacket) {
            switch (type) {
                case RadioPacketProperty.Time: return lastPacket.time;
                case RadioPacketProperty.SerialNumber: return lastPacket.serial;
                case RadioPacketProperty.SignalStrength: return lastPacket.signal;
            }
        }
        return 0;
    }
    radio.receivedPacket = receivedPacket;
    /**
     * Gets a packet property.
     * @param type the packet property type, eg: PacketProperty.time
     */
    //% blockId=radio_packet_property block="%note"
    //% shim=TD_ID blockHidden=1
    function _packetProperty(type) {
        return type;
    }
    radio._packetProperty = _packetProperty;
})(radio || (radio = {}));
