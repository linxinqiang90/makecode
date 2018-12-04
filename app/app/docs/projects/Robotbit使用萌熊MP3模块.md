# Robotbit使用萌熊MP3模块

萌熊MP3接线
robotbit——MP3
5V——V
P1——A
GND——G
P2——D
按照上述接好猫头超声波，引脚必须对应接对，否则MP3不能正常工作，通电前请再三检查。插接好后，板上的电源必须打开！同时按下AB播放，按A增加音量，按B减少音量。

```blocks
function play() {
    // P1接MP3的A引脚
    //
    // P2接MP3的D引脚
    //
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(15)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function volume_up() {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
// 同时按下AB播放
input.onButtonPressed(Button.AB, function () {
    play()
})
// 按下A增大音量
input.onButtonPressed(Button.A, function () {
    volume_up()
})
// 下一首
function next_song() {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(60)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function volume_down() {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
// 按下B减小音量
input.onButtonPressed(Button.B, function () {
    volume_down()
})
// 上一首
function last_song() {
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(60)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
```