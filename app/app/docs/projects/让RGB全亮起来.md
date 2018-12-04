# 让RGB全亮起来

Robotbit上自带4颗RGB灯，让这4颗灯循环红绿蓝亮起来

```blocks
basic.forever(function () {
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(100)
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(100)
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(100)
})
```

```package
robotbit=github:kittenbot/pxt-robotbit#v0.2.4
```
