/**
 * Events and data from sensors
 */
//% color=#D400D4 weight=111 icon="\uf192"
var input;
(function (input) {
    /**
     * Attaches code to run when the screen is facing up.
     * @param body TODO
     */
    //% help=input/on-screen-up
    function onScreenUp(body) {
        input.onGesture(5 /* ScreenUp */, body);
    }
    input.onScreenUp = onScreenUp;
    /**
     * Attaches code to run when the screen is facing down.
     * @param body TODO
     */
    //% help=input/on-screen-down
    function onScreenDown(body) {
        input.onGesture(6 /* ScreenDown */, body);
    }
    input.onScreenDown = onScreenDown;
    /**
     * Attaches code to run when the device is shaken.
     * @param body TODO
     */
    //% help=input/on-shake
    function onShake(body) {
        input.onGesture(11 /* Shake */, body);
    }
    input.onShake = onShake;
    /**
     * Attaches code to run when the logo is oriented upwards and the board is vertical.
     * @param body TODO
     */
    //% help=input/on-logo-up
    function onLogoUp(body) {
        input.onGesture(1 /* LogoUp */, body);
    }
    input.onLogoUp = onLogoUp;
    /**
     * Attaches code to run when the logo is oriented downwards and the board is vertical.
     * @param body TODO
     */
    //% help=input/on-logo-down
    function onLogoDown(body) {
        input.onGesture(2 /* LogoDown */, body);
    }
    input.onLogoDown = onLogoDown;
    /**
     * Obsolete, use input.calibrateCompass instead.
     */
    //% weight=0 help=input/calibrate-compass
    function calibrate() {
        input.calibrateCompass();
    }
    input.calibrate = calibrate;
})(input || (input = {}));
