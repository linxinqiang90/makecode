var Math;
(function (Math) {
    /**
     * Generates a `true` or `false` value randomly, just like flipping a coin.
     */
    //% blockId=logic_random block="pick random true or false"
    //% help=math/random-boolean weight=0
    function randomBoolean() {
        return Math.randomRange(0, 1) === 1;
    }
    Math.randomBoolean = randomBoolean;
})(Math || (Math = {}));
