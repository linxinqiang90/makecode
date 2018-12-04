# Robotbit控制步进电机

Robotbit上的M1和M2分别可以控制两路28BY减速步进电机，使用前，必须注意步进电机的接口的插接方向。红色那个线对应电路板上的VM，如果不清楚，具体教程可以查看小喵科技论坛相关帖子

```blocks
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    robotbit.StpCarMove(10, 48)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    robotbit.StpCarMove(-10, 48)
    basic.pause(1000)
})
```

```package
robotbit=github:kittenbot/pxt-robotbit#v0.2.4
```
