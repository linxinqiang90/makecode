var radio;
(function (radio) {
    /**
     * Gets the message code
     */
    //% blockHidden=1 shim=ENUM_GET
    //% blockId=radioMessageCode block="$msg" enumInitialMembers="message1"
    //% enumName=RadioMessage enumMemberName=msg enumPromptHint="e.g. Start, Stop, Jump..."
    function __message(msg) {
        return msg;
    }
    radio.__message = __message;
    /**
     * Broadcasts a message over radio
     * @param msg
     */
    //% blockId=radioBroadcastMessage block="radio send $msg"
    //% msg.shadow=radioMessageCode draggableParameters
    //% weight=200
    //% blockGap=8
    //% help=radio/send-message
    function sendMessage(msg) {
        // 0 is MICROBIT_EVT_ANY, shifting by 1
        radio.raiseEvent(2000 /* MES_BROADCAST_GENERAL_ID */, msg + 1);
    }
    radio.sendMessage = sendMessage;
    /**
     * Registers code to run for a particular message
     * @param msg
     * @param handler
     */
    //% blockId=radioOnMessageReceived block="on radio $msg received"
    //% msg.shadow=radioMessageCode draggableParameters
    //% weight=199
    //% help=radio/on-received-message
    function onReceivedMessage(msg, handler) {
        control.onEvent(2000 /* MES_BROADCAST_GENERAL_ID */, msg + 1, handler);
    }
    radio.onReceivedMessage = onReceivedMessage;
})(radio || (radio = {}));
