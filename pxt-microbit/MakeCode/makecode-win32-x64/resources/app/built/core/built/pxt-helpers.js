/**
  * Convert a string to an integer.
  * @param s A string to convert into an integral number. eg: 123
  */
//% help=text/parse-int
//% blockId="string_parseint" block="parse to integer %text" blockNamespace="text"
//% text.defl="123"
//% blockHidden=1
function parseInt(text) {
    return parseFloat(text) >> 0;
}
var helpers;
(function (helpers) {
    function arraySplice(arr, start, len) {
        if (start < 0) {
            return;
        }
        for (var i = 0; i < len; ++i) {
            arr.removeAt(start);
        }
    }
    helpers.arraySplice = arraySplice;
    function arrayReverse(arr) {
        var len = arr.length;
        for (var i = 0; i < len / 2; i++) {
            swap(arr, i, len - i - 1);
        }
    }
    helpers.arrayReverse = arrayReverse;
    function arrayShift(arr) {
        return arr.removeAt(0);
    }
    helpers.arrayShift = arrayShift;
    function arrayJoin(arr, sep) {
        var r = "";
        var len = arr.length; // caching this seems to match V8
        for (var i = 0; i < len; ++i) {
            if (i > 0 && sep)
                r += sep;
            r += arr[i] || "";
        }
        return r;
    }
    helpers.arrayJoin = arrayJoin;
    /*TODO: Enable this multiple value unshift, after rest is enabled in our compiler.
        export function arrayUnshift<T>(arr: T[], ...values: T[]) : number {
            for(let i = values.length; i > 0; --i) {
                arr.insertAt(0, values[i - 1]);
            }
            return arr.length;
        }
    */
    function arrayUnshift(arr, value) {
        arr.insertAt(0, value);
        return arr.length;
    }
    helpers.arrayUnshift = arrayUnshift;
    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    function sortHelper(arr, callbackfn) {
        if (arr.length <= 0 || !callbackfn) {
            return arr;
        }
        var len = arr.length;
        // simple selection sort.
        for (var i = 0; i < len - 1; ++i) {
            for (var j = i + 1; j < len; ++j) {
                if (callbackfn(arr[i], arr[j]) > 0) {
                    swap(arr, i, j);
                }
            }
        }
        return arr;
    }
    function arraySort(arr, callbackfn) {
        if (!callbackfn) {
            //TODO: support native strings and number sorting
            /* callbackfn = function (value1: string, value2: string) : number {
                return value1.compare(value2);
                }*/
        }
        return sortHelper(arr, callbackfn);
    }
    helpers.arraySort = arraySort;
    function arrayMap(arr, callbackfn) {
        var res = [];
        var len = arr.length; // caching this seems to match V8
        for (var i = 0; i < len; ++i) {
            res.push(callbackfn(arr[i], i));
        }
        return res;
    }
    helpers.arrayMap = arrayMap;
    function arraySome(arr, callbackfn) {
        var len = arr.length; // caching this seems to match V8
        for (var i = 0; i < len; ++i)
            if (callbackfn(arr[i], i))
                return true;
        return false;
    }
    helpers.arraySome = arraySome;
    function arrayEvery(arr, callbackfn) {
        var len = arr.length; // caching this seems to match V8
        for (var i = 0; i < len; ++i)
            if (!callbackfn(arr[i], i))
                return false;
        return true;
    }
    helpers.arrayEvery = arrayEvery;
    function arrayForEach(arr, callbackfn) {
        var len = arr.length; // caching this seems to match V8
        for (var i = 0; i < len; ++i) {
            callbackfn(arr[i], i);
        }
    }
    helpers.arrayForEach = arrayForEach;
    function arrayFilter(arr, callbackfn) {
        var res = [];
        var len = arr.length;
        for (var i = 0; i < len; ++i) {
            var v = arr[i]; // need to cache
            if (callbackfn(v, i))
                res.push(v);
        }
        return res;
    }
    helpers.arrayFilter = arrayFilter;
    function arrayReduce(arr, callbackfn, initialValue) {
        var len = arr.length;
        for (var i = 0; i < len; ++i) {
            initialValue = callbackfn(initialValue, arr[i], i);
        }
        return initialValue;
    }
    helpers.arrayReduce = arrayReduce;
    function arraySlice(arr, start, end) {
        var res = [];
        var len = arr.length;
        if (start < 0) {
            start = Math.max(len + start, 0);
        }
        if (end < 0) {
            end = len + end;
        }
        var sliceLength = end - start;
        for (var i = 0; i < sliceLength; ++i) {
            var index = i + start;
            if (index >= len) {
                break;
            }
            res.push(arr[index]);
        }
        return res;
    }
    helpers.arraySlice = arraySlice;
})(helpers || (helpers = {}));
var Math;
(function (Math) {
    function clamp(min, max, value) {
        return Math.min(max, Math.max(min, value));
    }
    Math.clamp = clamp;
    /**
      * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
      * For example, the absolute value of -5 is the same as the absolute value of 5.
      * @param x A numeric expression for which the absolute value is needed.
      */
    function abs(x) {
        return x < 0 ? -x : x;
    }
    Math.abs = abs;
    /**
      * Returns the sign of the x, indicating whether x is positive, negative or zero.
      * @param x The numeric expression to test
      */
    function sign(x) {
        if (x == 0)
            return 0;
        if (x > 0)
            return 1;
        return -1;
    }
    Math.sign = sign;
    /**
      * Returns the larger of two supplied numeric expressions.
      */
    function max(a, b) {
        if (a >= b)
            return a;
        return b;
    }
    Math.max = max;
    /**
      * Returns the smaller of two supplied numeric expressions.
      */
    function min(a, b) {
        if (a <= b)
            return a;
        return b;
    }
    Math.min = min;
    /**
     * Rounds ``x`` to a number with the given number of ``digits``
     * @param x the number to round
     * @param digits the number of resulting digits
     */
    //%
    function roundWithPrecision(x, digits) {
        digits = digits | 0;
        // invalid digits input
        if (digits <= 0)
            return Math.round(x);
        if (x == 0)
            return 0;
        var r = 0;
        do {
            var d = Math.pow(10, digits);
            r = Math.round(x * d) / d;
            digits++;
        } while (r == 0 && digits < 21);
        return r;
    }
    Math.roundWithPrecision = roundWithPrecision;
})(Math || (Math = {}));
//% blockHidden=1
var __internal;
(function (__internal) {
    /**
     * A shim to render a boolean as a down/up toggle
     */
    //% shim=TD_ID blockHidden=1
    //% blockId=toggleDownUp block="%down"
    //% down.fieldEditor=toggledownup
    //% down.fieldOptions.decompileLiterals=true
    function __downUp(down) {
        return down;
    }
    __internal.__downUp = __downUp;
    /**
     * A shim to render a boolean as a up/down toggle
     */
    //% shim=TD_ID blockHidden=1
    //% blockId=toggleUpDown block="%up"
    //% up.fieldEditor=toggleupdown
    //% up.fieldOptions.decompileLiterals=true
    function __upDown(up) {
        return up;
    }
    __internal.__upDown = __upDown;
    /**
     * A shim to render a boolean as a high/low toggle
     */
    //% shim=TD_ID blockHidden=1
    //% blockId=toggleHighLow block="%high"
    //% high.fieldEditor=togglehighlow
    //% high.fieldOptions.decompileLiterals=true
    function __highLow(high) {
        return high;
    }
    __internal.__highLow = __highLow;
    /**
     * A shim to render a boolean as a on/off toggle
     */
    //% shim=TD_ID blockHidden=1
    //% blockId=toggleOnOff block="%on"
    //% on.fieldEditor=toggleonoff
    //% on.fieldOptions.decompileLiterals=true
    function __onOff(on) {
        return on;
    }
    __internal.__onOff = __onOff;
    /**
     * A shim to render a boolean as a yes/no toggle
     */
    //% shim=TD_ID blockHidden=1
    //% blockId=toggleYesNo block="%yes"
    //% yes.fieldEditor=toggleyesno
    //% yes.fieldOptions.decompileLiterals=true
    function __yesNo(yes) {
        return yes;
    }
    __internal.__yesNo = __yesNo;
    /**
     * Get the color wheel field editor
     * @param color color, eg: #ff0000
     */
    //% blockId=colorNumberPicker block="%value"
    //% blockHidden=true
    //% shim=TD_ID colorSecondary="#FFFFFF"
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.defl='#ff0000'
    //% value.fieldOptions.colours='["#ff0000","#ff8000","#ffff00","#ff9da5","#00ff00","#b09eff","#00ffff","#007fff","#65471f","#0000ff","#7f00ff","#ff0080","#ff00ff","#ffffff","#999999","#000000"]'
    //% value.fieldOptions.columns=4 value.fieldOptions.className='rgbColorPicker'
    function __colorNumberPicker(value) {
        return value;
    }
    __internal.__colorNumberPicker = __colorNumberPicker;
    /**
     * Get the color wheel field editor
     * @param value value between 0 to 255 to get a color value, eg: 10
     */
    //% blockId=colorWheelPicker block="%value"
    //% blockHidden=true
    //% shim=TD_ID colorSecondary="#FFFFFF"
    //% value.fieldEditor="colorwheel" value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.sliderWidth='200'
    //% value.fieldOptions.min=0 value.fieldOptions.max=255
    function __colorWheelPicker(value) {
        return value;
    }
    __internal.__colorWheelPicker = __colorWheelPicker;
    /**
    * Get the color wheel field editor using HSV values
    * @param value value between 0 to 255 to get a color value, eg: 10
    */
    //% blockId=colorWheelHsvPicker block="%value"
    //% blockHidden=true
    //% shim=TD_ID colorSecondary="#FFFFFF"
    //% value.fieldEditor="colorwheel" value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.sliderWidth='200'
    //% value.fieldOptions.min=0 value.fieldOptions.max=255
    //% value.fieldOptions.channel=hsvfast
    function __colorWheelHsvPicker(value) {
        return value;
    }
    __internal.__colorWheelHsvPicker = __colorWheelHsvPicker;
    /**
     * A speed picker
     * @param speed the speed, eg: 50
     */
    //% blockId=speedPicker block="%speed" shim=TD_ID
    //% speed.fieldEditor="speed" colorSecondary="#FFFFFF"
    //% weight=0 blockHidden=1 speed.fieldOptions.decompileLiterals=1
    function __speedPicker(speed) {
        return speed;
    }
    __internal.__speedPicker = __speedPicker;
    /**
     * A turn ratio picker
     * @param turnratio the turn ratio, eg: 0
     */
    //% blockId=turnRatioPicker block="%turnratio" shim=TD_ID
    //% turnratio.fieldEditor="turnratio" colorSecondary="#FFFFFF"
    //% weight=0 blockHidden=1 turnRatio.fieldOptions.decompileLiterals=1
    function __turnRatioPicker(turnratio) {
        return turnratio;
    }
    __internal.__turnRatioPicker = __turnRatioPicker;
    /**
     * A field editor that displays a protractor
     */
    //% blockId=protractorPicker block="%angle"
    //% shim=TD_ID
    //% angle.fieldEditor=protractor
    //% angle.fieldOptions.decompileLiterals=1    
    //% colorSecondary="#FFFFFF"
    //% blockHidden=1
    function __protractor(angle) {
        return angle;
    }
    __internal.__protractor = __protractor;
    /**
      * Get the time field editor
      * @param ms time duration in milliseconds, eg: 500, 1000
      */
    //% blockId=timePicker block="%ms"
    //% blockHidden=true shim=TD_ID
    //% colorSecondary="#FFFFFF"
    //% ms.fieldEditor="numberdropdown" ms.fieldOptions.decompileLiterals=true
    //% ms.fieldOptions.data='[["100 ms", 100], ["200 ms", 200], ["500 ms", 500], ["1 second", 1000], ["2 seconds", 2000]]'
    function __timePicker(ms) {
        return ms;
    }
    __internal.__timePicker = __timePicker;
})(__internal || (__internal = {}));
