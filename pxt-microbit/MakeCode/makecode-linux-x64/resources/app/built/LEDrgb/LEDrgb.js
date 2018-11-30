/**
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */
/**
 * 自定义图形块
 */
//% weight=5 color=#0fbc11 icon="\uf0eb" block="LEDrgb"
var Servo;
(function (Servo_1) {
    var PCA9685_ADDRESS = 0x41;
    var MODE1 = 0x00;
    var MODE2 = 0x01;
    var SUBADR1 = 0x02;
    var SUBADR2 = 0x03;
    var SUBADR3 = 0x04;
    var PRESCALE = 0xFE;
    var LED0_ON_L = 0x06;
    var LED0_ON_H = 0x07;
    var LED0_OFF_L = 0x08;
    var LED0_OFF_H = 0x09;
    var ALL_LED_ON_L = 0xFA;
    var ALL_LED_ON_H = 0xFB;
    var ALL_LED_OFF_L = 0xFC;
    var ALL_LED_OFF_H = 0xFD;
    var STP_CHA_L = 2047;
    var STP_CHA_H = 4095;
    var STP_CHB_L = 1;
    var STP_CHB_H = 2047;
    var STP_CHC_L = 1023;
    var STP_CHC_H = 3071;
    var STP_CHD_L = 3071;
    var STP_CHD_H = 1023;
    var initialized = false;
    var LED;
    (function (LED) {
        LED[LED["\u7EA2\u706F"] = 0] = "\u7EA2\u706F";
        LED[LED["\u7EFF\u706F"] = 1] = "\u7EFF\u706F";
        LED[LED["\u84DD\u706F"] = 2] = "\u84DD\u706F";
    })(LED = Servo_1.LED || (Servo_1.LED = {}));
    function i2cwrite(addr, reg, value) {
        var buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = value;
        pins.i2cWriteBuffer(addr, buf);
    }
    function i2cread(addr, reg) {
        pins.i2cWriteNumber(addr, reg, 7 /* UInt8BE */);
        var val = pins.i2cReadNumber(addr, 7 /* UInt8BE */);
        return val;
    }
    function initPCA9685() {
        i2cwrite(PCA9685_ADDRESS, MODE1, 0x00);
        setFreq(50);
        for (var idx = 0; idx < 16; idx++) {
            setPwm(idx, 0, 0);
        }
        initialized = true;
    }
    function setFreq(freq) {
        // Constrain the frequency
        var prescaleval = 25000000;
        prescaleval /= 4096;
        prescaleval /= freq;
        prescaleval -= 1;
        var prescale = prescaleval; //Math.Floor(prescaleval + 0.5);
        var oldmode = i2cread(PCA9685_ADDRESS, MODE1);
        var newmode = (oldmode & 0x7F) | 0x10; // sleep
        i2cwrite(PCA9685_ADDRESS, MODE1, newmode); // go to sleep
        i2cwrite(PCA9685_ADDRESS, PRESCALE, prescale); // set the prescaler
        i2cwrite(PCA9685_ADDRESS, MODE1, oldmode);
        control.waitMicros(5000);
        i2cwrite(PCA9685_ADDRESS, MODE1, oldmode | 0xa1);
    }
    function setPwm(channel, on, off) {
        if (channel < 0 || channel > 15)
            return;
        var buf = pins.createBuffer(5);
        buf[0] = LED0_ON_L + 4 * channel;
        buf[1] = on & 0xff;
        buf[2] = (on >> 8) & 0xff;
        buf[3] = off & 0xff;
        buf[4] = (off >> 8) & 0xff;
        pins.i2cWriteBuffer(PCA9685_ADDRESS, buf);
    }
    /**
     * Servo Execute
     * @param degree [0-180] degree of servo; eg: 90, 0, 180
    */
    //% blockId=setServo block="Servo channel|%channel|degree %degree"
    //% weight=85
    //% degree.min=0 degree.max=180
    function Servo(channel, degree) {
        if (!initialized) {
            initPCA9685();
        }
        // 50hz: 20,000 us
        var v_us = (degree * 1800 / 180 + 600); // 0.6 ~ 2.4
        var value = v_us * 4096 / 20000;
        setPwm(channel, 0, value);
    }
    Servo_1.Servo = Servo;
    /**
     * Servo Execute
     * @param pulse [500-2500] pulse of servo; eg: 1500, 500, 2500
    */
    //% blockId=setServoPulse block="LED灯  灯颜色选择|%channel|亮度 %pulse"
    //% weight=85
    //% pulse.min=0 pulse.max=19999
    function ServoPulse(channel, pulse) {
        if (!initialized) {
            initPCA9685();
        }
        // 50hz: 20,000 us
        var value = pulse * 4096 / 20000;
        setPwm(channel, 0, value);
    }
    Servo_1.ServoPulse = ServoPulse;
})(Servo || (Servo = {}));
