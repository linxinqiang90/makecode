# 调整RGB亮度

除了RGB颜色可控制，亮度也是可以控制的。尝试自己更改亮度值0-255

```blocks
robotbit.rgb().setBrightness(10)
basic.forever(function () {
    robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Indigo))
})
```

```package
robotbit=github:kittenbot/pxt-robotbit#v0.2.4
```
