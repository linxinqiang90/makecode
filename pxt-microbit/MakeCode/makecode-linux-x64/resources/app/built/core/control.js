/**
* Runtime and event utilities.
*/
//% weight=1 color="#333333" icon="\uf233"
//% advanced=true
var control;
(function (control) {
    /**
     * Returns the value of a C++ runtime constant
     */
    //% weight=2 weight=19 blockId="control_event_source_id" block="%id" blockGap=8
    //% shim=TD_ID advanced=true
    function eventSourceId(id) {
        return id;
    }
    control.eventSourceId = eventSourceId;
    /**
     * Returns the value of a C++ runtime constant
     */
    //% weight=1 weight=19 blockId="control_event_value_id" block="%id"
    //% shim=TD_ID advanced=true
    function eventValueId(id) {
        return id;
    }
    control.eventValueId = eventValueId;
    /**
     * Display specified error code and stop the program.
     */
    //% shim=pxtrt::panic
    function panic(code) { }
    control.panic = panic;
    /**
     * If the condition is false, display msg on serial console, and panic with code 098.
     */
    function assert(condition, msg) {
        if (!condition) {
            console.log("ASSERTION FAILED");
            if (msg != null) {
                console.log(msg);
            }
            panic(98);
        }
    }
    control.assert = assert;
    function fail(message) {
        console.log("Fatal failure: ");
        console.log(message);
        panic(108);
    }
    control.fail = fail;
    /**
     * Display warning in the simulator.
     */
    //% shim=pxtrt::runtimeWarning
    function runtimeWarning(message) { }
    control.runtimeWarning = runtimeWarning;
})(control || (control = {}));
