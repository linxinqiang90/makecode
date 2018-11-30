/**
 * Reading and writing data over a serial connection.
 */
//% weight=2 color=#002050 icon="\uf287"
//% advanced=true
var serial;
(function (serial) {
    /**
     * Print a line of text to the serial port
     * @param value to send over serial
     */
    //% weight=90
    //% help=serial/write-line blockGap=8
    //% blockId=serial_writeline block="serial|write line %text"
    //% text.shadowOptions.toString=true
    function writeLine(text) {
        if (!text)
            text = "";
        // pad data to the 32 byte boundary
        // to ensure apps receive the packet
        var r = (32 - (text.length + 2) % 32) % 32;
        serial.writeString(text);
        for (var i = 0; i < r; ++i)
            serial.writeString(" ");
        serial.writeString("\r\n");
    }
    serial.writeLine = writeLine;
    /**
     * Print a numeric value to the serial port
     */
    //% help=serial/write-number
    //% weight=89 blockGap=8
    //% blockId=serial_writenumber block="serial|write number %value"
    function writeNumber(value) {
        serial.writeString(value.toString());
    }
    serial.writeNumber = writeNumber;
    /**
     * Print an array of numeric values as CSV to the serial port
     */
    //% help=serial/write-numbers
    //% weight=86
    //% blockId=serial_writenumbers block="serial|write numbers %values"
    function writeNumbers(values) {
        if (!values)
            return;
        for (var i = 0; i < values.length; ++i) {
            if (i > 0)
                serial.writeString(",");
            writeNumber(values[i]);
        }
        writeLine("");
    }
    serial.writeNumbers = writeNumbers;
    /**
     * Write a name:value pair as a line to the serial port.
     * @param name name of the value stream, eg: x
     * @param value to write
     */
    //% weight=88 blockGap=8
    //% help=serial/write-value
    //% blockId=serial_writevalue block="serial|write value %name|= %value"
    function writeValue(name, value) {
        writeLine(name + ":" + value);
    }
    serial.writeValue = writeValue;
    /**
     * Read a line of text from the serial port.
     */
    //% help=serial/read-line
    //% blockId=serial_read_line block="serial|read line"
    //% weight=20 blockGap=8
    function readLine() {
        return serial.readUntil(delimiters(1 /* NewLine */));
    }
    serial.readLine = readLine;
    /**
     * Return the corresponding delimiter string
     */
    //% blockId="serial_delimiter_conv" block="%del"
    //% weight=1 blockHidden=true
    function delimiters(del) {
        // even though it might not look like, this is more
        // (memory) efficient than the C++ implementation, because the
        // strings are statically allocated and take no RAM
        switch (del) {
            case 1 /* NewLine */: return "\n";
            case 2 /* Comma */: return ",";
            case 3 /* Dollar */: return "$";
            case 4 /* Colon */: return ":";
            case 5 /* Fullstop */: return ".";
            case 6 /* Hash */: return "#";
            default: return "\n";
        }
    }
    serial.delimiters = delimiters;
})(serial || (serial = {}));
