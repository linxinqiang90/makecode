var servos;
(function (servos) {
    //% block="servo P0" fixedInstance whenUsed
    servos.P0 = new servos.PinServo(pins.P0);
    //% block="servo P1" fixedInstance whenUsed
    servos.P1 = new servos.PinServo(pins.P1);
    //% block="servo P2" fixedInstance whenUsed
    servos.P2 = new servos.PinServo(pins.P2);
})(servos || (servos = {}));
