var basic;
(function (basic) {
    /**
     * Scroll a number on the screen. If the number fits on the screen (i.e. is a single digit), do not scroll.
     * @param interval speed of scroll; eg: 150, 100, 200, -100
     */
    //% help=basic/show-number
    //% weight=96
    //% blockId=device_show_number block="show|number %number" blockGap=8
    //% async
    //% parts="ledmatrix" interval.defl=150
    function showNumber(value, interval) {
        basic.showString(Math.roundWithPrecision(value, 2).toString(), interval);
    }
    basic.showNumber = showNumber;
})(basic || (basic = {}));
