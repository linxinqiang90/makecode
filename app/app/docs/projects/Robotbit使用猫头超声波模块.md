# Robotbit使用猫头超声波模块

robotbit——超声波模块
5V——V
P1——D(超声波)
GND——G
P2——A(rgb灯)
按照上述接好猫头超声波，引脚必须对应接对，否则超声波不能正常工作，通电前请再三检查。插接好后，板上的电源必须打开！下载程序后，手靠近超声波探头，Microbit上就会显示一个距离值，如果距离值小于10就会显示绿色（猫头超声波上的两颗RGB灯），否则亮红色。

```blocks
let distance = 0
let rgb: neopixel.Strip = null
rgb = neopixel.create(DigitalPin.P2, 2, NeoPixelMode.RGB)
rgb.setBrightness(30)
basic.forever(function () {
    distance = robotbit.Ultrasonic(DigitalPin.P1)
    basic.showNumber(distance)
    if (distance < 10) {
        rgb.showColor(neopixel.colors(NeoPixelColors.Green))
    } else {
        rgb.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
```

```package
robotbit=github:kittenbot/pxt-robotbit#v0.2.4
```
