# RGB萤火虫灯

RGB亮度也是可以控制的，我们利用程序的循环结构，来实现led灯的渐亮渐灭的效果，模拟萤火虫的效果

```blocks
let b = 0
let a = 0
basic.showIcon(IconNames.Happy)
a = 0
b = 0
robotbit.rgb().clear()
basic.forever(function () {
    for (let a = 0; a <= 255 - b; a++) {
        robotbit.rgb().setBrightness(a + b)
        robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Green))
        robotbit.rgb().show()
        basic.pause(10)
    }
    basic.pause(1000)
    for (let a = 0; a <= 255 - b; a++) {
        robotbit.rgb().setBrightness(255 - a)
        robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Green))
        robotbit.rgb().show()
        basic.pause(10)
    }
    basic.pause(1000)
})
```

```package
robotbit=github:kittenbot/pxt-robotbit#v0.2.4
```
