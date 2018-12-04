# 实现RGB跑马灯

在控制单个RGB灯亮的基础上，按照顺序点亮熄灭，也就实现了流水，即跑马灯的效果

```blocks
basic.forever(function () {
    robotbit.rgb().setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    robotbit.rgb().show()
    basic.pause(100)
    robotbit.rgb().clear()
    robotbit.rgb().setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    robotbit.rgb().show()
    basic.pause(100)
    robotbit.rgb().clear()
    robotbit.rgb().setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    robotbit.rgb().show()
    basic.pause(100)
    robotbit.rgb().clear()
    robotbit.rgb().setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    robotbit.rgb().show()
    basic.pause(100)
    robotbit.rgb().clear()
})
```

```package
robotbit=github:kittenbot/pxt-robotbit#v0.2.4
```
