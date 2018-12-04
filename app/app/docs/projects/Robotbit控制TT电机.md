# Robotbit控制TT电机

Robotbit上的M1和M2分别可以控制4路直流电机，此程序分别控制M1A（A+A-）和M2B（B+B-），请对接插好。电机线分红黑线，红黑线交换插接只影响电机的方向，不会烧坏电路板。

```blocks
basic.forever(function () {
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    255,
    robotbit.Motors.M2B,
    255
    )
    basic.pause(1000)
    robotbit.MotorStopAll()
    basic.pause(1000)
    robotbit.MotorRunDual(
    robotbit.Motors.M1A,
    -255,
    robotbit.Motors.M2B,
    -255
    )
    basic.pause(1000)
    robotbit.MotorStopAll()
    basic.pause(1000)
})
```

```package
robotbit=github:kittenbot/pxt-robotbit#v0.2.4
```
