Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    serial.writeLine("12345689")
})
serial.redirect(
SerialPin.P8,
SerialPin.P12,
BaudRate.BaudRate115200
)
Mbit_IR.init(Pins.P5)
basic.forever(function () {
    basic.pause(2000)
    serial.writeLine("hello")
})
