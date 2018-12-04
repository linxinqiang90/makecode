# Robotbit控制舵机运动

Robotbit上有S1-S8个舵机接口，可以驱动9g舵机或者Geeksevo舵机，下载程序后，记得打开扩展板上的电源开关，否则舵机不会运动。

```blocks
basic.forever(function () {
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(1000)
})
```

```package
robotbit=github:kittenbot/pxt-robotbit#v0.2.4
```
