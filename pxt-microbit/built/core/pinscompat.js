//% noRefCounting fixedInstances
var MicrobitPin = /** @class */ (function () {
    function MicrobitPin(id) {
        this.id = id;
    }
    MicrobitPin.prototype.digitalId = function () {
        return this.id;
    };
    MicrobitPin.prototype.analogId = function () {
        return this.id;
    };
    MicrobitPin.prototype.digitalRead = function () {
        return pins.digitalReadPin(this.digitalId()) != 0;
    };
    MicrobitPin.prototype.digitalWrite = function (value) {
        pins.digitalWritePin(this.digitalId(), value ? 1 : 0);
    };
    MicrobitPin.prototype.onPulsed = function (pulse, body) {
        pins.onPulsed(this.digitalId(), pulse, body);
    };
    MicrobitPin.prototype.onEvent = function (event, body) {
        // TODO
    };
    MicrobitPin.prototype.pulseIn = function (value, maxDuration) {
        return pins.pulseIn(this.digitalId(), value, maxDuration);
    };
    MicrobitPin.prototype.setPull = function (pull) {
        pins.setPull(this.digitalId(), pull);
    };
    MicrobitPin.prototype.analogRead = function () {
        return pins.analogReadPin(this.analogId());
    };
    MicrobitPin.prototype.analogWrite = function (value) {
        pins.analogWritePin(this.analogId(), value);
    };
    MicrobitPin.prototype.analogSetPeriod = function (period) {
        pins.analogSetPeriod(this.analogId(), period);
    };
    MicrobitPin.prototype.servoWrite = function (value) {
        pins.servoWritePin(this.analogId(), value);
    };
    MicrobitPin.prototype.servoSetPulse = function (duration) {
        pins.servoSetPulse(this.analogId(), duration);
    };
    return MicrobitPin;
}());
var pins;
(function (pins) {
    /**
     * Pin P0
     */
    //% fixedInstance whenUsed
    pins.P0 = new MicrobitPin(7 /* P0 */);
    /**
     * Pin P1
     */
    //% fixedInstance whenUsed
    pins.P1 = new MicrobitPin(8 /* P1 */);
    /**
     * Pin P2
     */
    //% fixedInstance whenUsed
    pins.P2 = new MicrobitPin(9 /* P2 */);
    /**
     * Pin P3
     */
    //% fixedInstance whenUsed
    pins.P3 = new MicrobitPin(10 /* P3 */);
    /**
     * Pin P4
     */
    //% fixedInstance whenUsed
    pins.P4 = new MicrobitPin(11 /* P4 */);
    /**
     * Pin P5
     */
    //% fixedInstance whenUsed
    pins.P5 = new MicrobitPin(12 /* P5 */);
    /**
     * Pin P6
     */
    //% fixedInstance whenUsed
    pins.P6 = new MicrobitPin(13 /* P6 */);
    /**
     * Pin P7
     */
    //% fixedInstance whenUsed
    pins.P7 = new MicrobitPin(14 /* P7 */);
    /**
     * Pin P8
     */
    //% fixedInstance whenUsed
    pins.P8 = new MicrobitPin(15 /* P8 */);
    /**
     * Pin P9
     */
    //% fixedInstance whenUsed
    pins.P9 = new MicrobitPin(16 /* P9 */);
    /**
     * Pin P10
     */
    //% fixedInstance whenUsed
    pins.P10 = new MicrobitPin(17 /* P10 */);
    /**
     * Pin P3
     */
    //% fixedInstance whenUsed
    pins.P11 = new MicrobitPin(18 /* P11 */);
    /**
     * Pin P12
     */
    //% fixedInstance whenUsed
    pins.P12 = new MicrobitPin(19 /* P12 */);
    /**
     * Pin P13
     */
    //% fixedInstance whenUsed
    pins.P13 = new MicrobitPin(20 /* P13 */);
    /**
     * Pin P14
     */
    //% fixedInstance whenUsed
    pins.P14 = new MicrobitPin(21 /* P14 */);
    /**
     * Pin P15
     */
    //% fixedInstance whenUsed
    pins.P15 = new MicrobitPin(22 /* P15 */);
    /**
     * Pin P16
     */
    //% fixedInstance whenUsed
    pins.P16 = new MicrobitPin(23 /* P16 */);
    /**
     * Pin P19
     */
    //% fixedInstance whenUsed
    pins.P19 = new MicrobitPin(24 /* P19 */);
    /**
     * Pin P19
     */
    //% fixedInstance whenUsed
    pins.P20 = new MicrobitPin(25 /* P20 */);
})(pins || (pins = {}));
