var devices;
(function (devices) {
    /**
     * Sends a ``camera`` command to the parent device.
     * @param event event description
     */
    //% weight=30 help=devices/tell-camera-to
    //% blockId=devices_camera icon="\uf030" block="tell camera to|%property" blockGap=8
    function tellCameraTo(event) {
        control.raiseEvent(1002 /* MES_CAMERA_ID */, event);
    }
    devices.tellCameraTo = tellCameraTo;
    /**
     * Sends a ``remote control`` command to the parent device.
     * @param event event description
     */
    //% weight=29 help=devices/tell-remote-control-to
    //% blockId=devices_remote_control block="tell remote control to|%property" blockGap=14 icon="\uf144"
    function tellRemoteControlTo(event) {
        control.raiseEvent(1001 /* MES_REMOTE_CONTROL_ID */, event);
    }
    devices.tellRemoteControlTo = tellRemoteControlTo;
    /**
     * Sends an ``alert`` command to the parent device.
     * @param event event description
     */
    //% weight=27 help=devices/raise-alert-to
    //% blockId=devices_alert block="raise alert to|%property" icon="\uf0f3"
    function raiseAlertTo(event) {
        control.raiseEvent(1004 /* MES_ALERTS_ID */, event);
    }
    devices.raiseAlertTo = raiseAlertTo;
    /**
     * Registers code to run when the device notifies about a particular event.
     * @param event event description
     * @param body code handler when event is triggered
     */
    //% help=devices/on-notified weight=26
    //% blockId=devices_device_info_event block="on notified|%event" icon="\uf10a"
    function onNotified(event, body) {
        control.onEvent(1103 /* MES_DEVICE_INFO_ID */, event, body);
    }
    devices.onNotified = onNotified;
    /**
     * Register code to run when the micro:bit receives a command from the paired gamepad.
     * @param name button name
     * @param body code to run when button is pressed
     */
    //% help=devices/on-gamepad-button weight=40
    //% weight=25
    //% blockId=devices_gamepad_event block="on gamepad button|%NAME" icon="\uf11b"
    function onGamepadButton(name, body) {
        control.onEvent(1104 /* MES_DPAD_CONTROLLER_ID */, name, body);
    }
    devices.onGamepadButton = onGamepadButton;
})(devices || (devices = {}));
