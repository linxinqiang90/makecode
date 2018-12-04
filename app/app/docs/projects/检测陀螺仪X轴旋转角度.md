# 检测陀螺仪X轴旋转角度

Micro:bit上陀螺仪可以检测三轴的旋转角度，而不是加速度的大小，积木块微软官方翻译有误，此程序用来检测x轴的旋转角度

```blocks
basic.forever(function () {
    basic.showNumber(input.acceleration(Dimension.X))
    basic.pause(100)
})
```