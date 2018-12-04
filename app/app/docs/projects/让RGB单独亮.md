# 让RGB单独亮

让Robotbit上第一颗灯进行闪烁，即亮灭交替。单独控制RGB亮灭，刷新显示这个是必不可少的。如果要让RGB灭，即把颜色设置成黑色

```blocks
basic.forever(function () {
    robotbit.rgb().setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    robotbit.rgb().show()
    basic.pause(100)
    robotbit.rgb().setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    robotbit.rgb().show()
    basic.pause(100)
})
```

```package
robotbit=github:kittenbot/pxt-robotbit#v0.2.4
```
