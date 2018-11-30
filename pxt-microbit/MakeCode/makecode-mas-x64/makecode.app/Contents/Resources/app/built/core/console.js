/// <reference no-default-lib="true"/>
/**
 * Reading and writing data to the console output.
 */
//% weight=12 color=#002050 icon="\uf120"
//% advanced=true
var console;
(function (console) {
    //% whenUsed
    var listeners = undefined;
    /**
     * Write a line of text to the console output.
     * @param value to send
     */
    //% weight=90
    //% help=console/log blockGap=8
    //% text.shadowOptions.toString=true
    function log(text) {
        // pad text on the 32byte boundar
        text += "\r\n";
        control.__log(text);
        // send to listeners
        if (listeners)
            for (var i = 0; i < listeners.length; ++i)
                listeners[i](text);
    }
    console.log = log;
    /**
     * Write a name:value pair as a line of text to the console output.
     * @param name name of the value stream, eg: "x"
     * @param value to write
     */
    //% weight=88 blockGap=8
    //% help=console/log-value
    function logValue(name, value) {
        log(name ? name + ": " + value : "" + value);
    }
    console.logValue = logValue;
    /**
     * Adds a listener for the log messages
     * @param listener
     */
    //%
    function addListener(listener) {
        if (!listener)
            return;
        if (!listeners)
            listeners = [];
        listeners.push(listener);
    }
    console.addListener = addListener;
})(console || (console = {}));
