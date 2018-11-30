Mbit_IR.onPressEvent(1 /* Up */, function () {
    serial.writeLine("12345689");
});
serial.redirect(15 /* P8 */, 19 /* P12 */, 115200 /* BaudRate115200 */);
Mbit_IR.init(17 /* P5 */);
basic.forever(function () {
    basic.pause(2000);
    serial.writeLine("hello");
});
