# 蜂鸣器播放生日歌

MicrobitP0接上喇叭或者蜂鸣器；或者如果你手上有Robotbit，IObit，把Microbit插上去，下载程序后，就可以听到演奏生日歌。

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("AB")
})
```