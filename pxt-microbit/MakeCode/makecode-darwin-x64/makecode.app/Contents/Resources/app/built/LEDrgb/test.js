// tests go here; this will not be compiled when this package is used as a library
serial.redirect(15 /* P8 */, 19 /* P12 */, 115200 /* BaudRate115200 */);
basic.forever(function () {
    serial.writeLine("12345789");
    basic.pause(1000);
    Servo.ServoPulse(0, 1500);
    Servo.ServoPulse(1, 1500);
    Servo.ServoPulse(2, 1500);
});
