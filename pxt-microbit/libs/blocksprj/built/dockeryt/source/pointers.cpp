#include "pxt.h"
#include "source/platform.h"
#include "source/pxt.h"
#include "source/pxtbase.h"
#include "source/pxtcore.h"
namespace pxt {
    typedef uint32_t ImageLiteral_;
    typedef RefMImage *Image;
    typedef TValueStruct *TValue;
    typedef TValue TNumber;
    typedef TValue Action;
    typedef TValue ImageLiteral;
    typedef void (*RefObjectMethod)(RefObject *self);
    typedef void *PVoid;
    typedef void **PPVoid;
    typedef void *Object_;
    typedef TValue (*ActionCB)(TValue *captured, TValue arg0, TValue arg1, TValue arg2);
    typedef int color;
    typedef BoxedBuffer *Buffer;
    typedef BoxedString *String;
    typedef RefImage *Image_;
}
namespace String_ {
    String mkEmpty();
    String fromCharCode(int code);
    String charAt(String s, int pos);
    TNumber charCodeAt(String s, int pos);
    String concat(String s, String other);
    int length(String s);
    TNumber toNumber(String s);
    String substr(String s, int start, int length);
    int indexOf(String s, String searchString, int start);
    int includes(String s, String searchString, int start);
}
namespace Boolean_ {
    bool bang(int v);
}
namespace pxt {
    bool switch_eq(TValue a, TValue b);
}
namespace langsupp {
    TValue ptreq(TValue a, TValue b);
    TValue ptreqq(TValue a, TValue b);
    TValue ptrneq(TValue a, TValue b);
    TValue ptrneqq(TValue a, TValue b);
}
namespace numops {
    int toBool(TValue v);
    int toBoolDecr(TValue v);
    TNumber adds(TNumber a, TNumber b);
    TNumber subs(TNumber a, TNumber b);
    TNumber muls(TNumber a, TNumber b);
    TNumber div(TNumber a, TNumber b);
    TNumber mod(TNumber a, TNumber b);
    TNumber lsls(TNumber a, TNumber b);
    TNumber lsrs(TNumber a, TNumber b);
    TNumber asrs(TNumber a, TNumber b);
    TNumber eors(TNumber a, TNumber b);
    TNumber orrs(TNumber a, TNumber b);
    TNumber bnot(TNumber a);
    TNumber ands(TNumber a, TNumber b);
    bool lt_bool(TNumber a, TNumber b);
    TNumber le(TNumber a, TNumber b);
    TNumber lt(TNumber a, TNumber b);
    TNumber ge(TNumber a, TNumber b);
    TNumber gt(TNumber a, TNumber b);
    TNumber eq(TNumber a, TNumber b);
    TNumber neq(TNumber a, TNumber b);
    TNumber eqq(TNumber a, TNumber b);
    TNumber neqq(TNumber a, TNumber b);
}
namespace Math_ {
    TNumber pow(TNumber x, TNumber y);
    TNumber atan2(TNumber y, TNumber x);
    TNumber random();
    TNumber randomRange(TNumber min, TNumber max);
    TNumber log(TNumber x);
    TNumber log10(TNumber x);
    TNumber tan(TNumber x);
    TNumber sin(TNumber x);
    TNumber cos(TNumber x);
    TNumber atan(TNumber x);
    TNumber asin(TNumber x);
    TNumber acos(TNumber x);
    TNumber sqrt(TNumber x);
    TNumber floor(TNumber x);
    TNumber ceil(TNumber x);
    TNumber trunc(TNumber x);
    TNumber round(TNumber x);
    int imul(int x, int y);
    int idiv(int x, int y);
}
namespace Array_ {
    RefCollection* mk(unsigned flags);
    int length(RefCollection *c);
    void setLength(RefCollection *c, int newLength);
    void push(RefCollection *c, TValue x);
    TValue pop(RefCollection *c);
    TValue getAt(RefCollection *c, int x);
    void setAt(RefCollection *c, int x, TValue y);
    TValue removeAt(RefCollection *c, int x);
    void insertAt(RefCollection *c, int x, TValue value);
    int indexOf(RefCollection *c, TValue x, int start);
    bool removeElement(RefCollection *c, TValue x);
}
namespace pxt {
    void* ptrOfLiteral(int offset);
    unsigned programSize();
    int getConfig(int key, int defl);
}
namespace pxtrt {
    TValue ldloc(RefLocal *r);
    TValue ldlocRef(RefRefLocal *r);
    void stloc(RefLocal *r, TValue v);
    void stlocRef(RefRefLocal *r, TValue v);
    RefLocal* mkloc();
    RefRefLocal* mklocRef();
    TValue ldfld(RefRecord *r, int idx);
    TValue ldfldRef(RefRecord *r, int idx);
    void stfld(RefRecord *r, int idx, TValue val);
    void stfldRef(RefRecord *r, int idx, TValue val);
    RefAction* stclo(RefAction *a, int idx, TValue v);
    void panic(int code);
    String emptyToNull(String s);
    int ptrToBool(TValue p);
    RefMap* mkMap();
    TValue mapGet(RefMap *map, unsigned key);
    TValue mapGetRef(RefMap *map, unsigned key);
    void mapSet(RefMap *map, unsigned key, TValue val);
    void mapSetRef(RefMap *map, unsigned key, TValue val);
    void* getGlobalsPtr();
    void runtimeWarning(String s);
}
namespace pxt {
    ValType valType(TValue v);
    String typeOf(TValue v);
    unsigned afterProgramPage();
}
namespace images {
    Image createImage(ImageLiteral_ leds);
    Image createBigImage(ImageLiteral_ leds);
}
namespace ImageMethods {
    void plotImage(Image i, int xOffset = 0);
    void showImage(Image sprite, int xOffset, int interval = 400);
    void plotFrame(Image i, int xOffset);
    void scrollImage(Image id, int frameOffset, int interval);
    void clear(Image i);
    void setPixelBrightness(Image i, int x, int y, int value);
    int pixelBrightness(Image i, int x, int y);
    int width(Image i);
    int height(Image i);
    void setPixel(Image i, int x, int y, bool value);
    bool pixel(Image i, int x, int y);
    void showFrame(Image i, int frame, int interval = 400);
}
namespace basic {
    void showLeds(ImageLiteral_ leds, int interval = 400);
    void showString(String text, int interval = 150);
    void clearScreen();
    void showAnimation(ImageLiteral_ leds, int interval = 400);
    void plotLeds(ImageLiteral_ leds);
    void forever(Action a);
    void pause(int ms);
}
    enum Button : int;
    enum Dimension : int;
    enum Rotation : int;
    enum TouchPin : int;
    enum AcceleratorRange : int;
    enum Gesture : int;
    enum MesDpadButtonInfo : int;
namespace input {
    void onButtonPressed(Button button, Action body);
    void onGesture(Gesture gesture, Action body);
    void onPinPressed(TouchPin name, Action body);
    void onPinReleased(TouchPin name, Action body);
    bool buttonIsPressed(Button button);
    bool pinIsPressed(TouchPin name);
    int acceleration(Dimension dimension);
    int lightLevel();
    int compassHeading();
    int temperature();
    int rotation(Rotation kind);
    int magneticForce(Dimension dimension);
    int runningTime();
    int runningTimeMicros();
    void calibrateCompass();
    void setAccelerometerRange(AcceleratorRange range);
}
    enum EventCreationMode : int;
    enum EventBusSource : int;
    enum EventBusValue : int;
namespace control {
    void inBackground(Action a);
    void reset();
    void waitMicros(int micros);
    void raiseEvent(int src, int value, EventCreationMode mode);
    void onEvent(int src, int value, Action handler);
    int eventValue();
    int eventTimestamp();
    String deviceName();
    int deviceSerialNumber();
    void __midiSend(Buffer buffer);
    void __log(String text);
}
    enum DisplayMode_ : int;
namespace led {
    void plot(int x, int y);
    void plotBrightness(int x, int y, int brightness);
    void unplot(int x, int y);
    bool point(int x, int y);
    int brightness();
    void setBrightness(int value);
    void stopAnimation();
    void setDisplayMode(DisplayMode_ mode);
    DisplayMode_ displayMode();
    void enable(bool on);
    Image screenshot();
}
    enum DigitalPin : int;
    enum AnalogPin : int;
    enum PulseValue : int;
    enum PinPullMode : int;
    enum PinEventType : int;
namespace pins {
    MicroBitPin* getPinAddress(int id);
    int digitalReadPin(DigitalPin name);
    void digitalWritePin(DigitalPin name, int value);
    int analogReadPin(AnalogPin name);
    void analogWritePin(AnalogPin name, int value);
    void analogSetPeriod(AnalogPin name, int micros);
    void onPulsed(DigitalPin name, PulseValue pulse, Action body);
    int pulseDuration();
    int pulseIn(DigitalPin name, PulseValue value, int maxDuration = 2000000);
    void servoWritePin(AnalogPin name, int value);
    void servoSetPulse(AnalogPin name, int micros);
    void analogSetPitchPin(AnalogPin name);
    void analogPitch(int frequency, int ms);
    void setPull(DigitalPin name, PinPullMode pull);
    void setEvents(DigitalPin name, PinEventType type);
    Buffer createBuffer(int size);
    Buffer i2cReadBuffer(int address, int size, bool repeat = false);
    int i2cWriteBuffer(int address, Buffer buf, bool repeat = false);
    int spiWrite(int value);
    void spiFrequency(int frequency);
    void spiFormat(int bits, int mode);
    void spiPins(DigitalPin mosi, DigitalPin miso, DigitalPin sck);
}
    enum SerialPin : int;
    enum BaudRate : int;
    enum Delimiters : int;
namespace serial {
    String readUntil(String delimiter);
    String readString();
    void onDataReceived(String delimiters, Action body);
    void writeString(String text);
    void writeBuffer(Buffer buffer);
    Buffer readBuffer(int length);
    void redirect(SerialPin tx, SerialPin rx, BaudRate rate);
    void redirectToUSB();
}
namespace BufferMethods {
    uint8_t* getBytes(Buffer buf);
    int getByte(Buffer buf, int off);
    void setByte(Buffer buf, int off, int v);
    void setNumber(Buffer buf, NumberFormat format, int offset, TNumber value);
    TNumber getNumber(Buffer buf, NumberFormat format, int offset);
    int length(Buffer s);
    void fill(Buffer buf, int value, int offset = 0, int length = -1);
    Buffer slice(Buffer buf, int offset = 0, int length = -1);
    void shift(Buffer buf, int offset, int start = 0, int length = -1);
    String toHex(Buffer buf);
    void rotate(Buffer buf, int offset, int start = 0, int length = -1);
    void write(Buffer buf, int dstOffset, Buffer src);
}
namespace control {
    Buffer createBuffer(int size);
}
namespace radio {
    void raiseEvent(int src, int value);
    void sendNumber(TNumber value);
    void sendValue(String name, TNumber value);
    void sendString(String msg);
    void sendBuffer(Buffer msg);
    void writeValueToSerial();
    void writeReceivedPacketToSerial();
    TNumber receiveNumber();
    void onDataReceived(Action body);
    String receiveString();
    int receivedSignalStrength();
    void setGroup(int id);
    void setTransmitPower(int power);
    void setTransmitSerialNumber(bool transmit);
    TNumber receivedNumber();
    uint32_t receivedSerial();
    String receivedString();
    Buffer receivedBuffer();
    uint32_t receivedTime();
}
extern "C" void __aeabi_dadd();
extern "C" void __aeabi_dcmplt();
extern "C" void __aeabi_dcmpgt();
extern "C" void __aeabi_dsub();
extern "C" void __aeabi_ddiv();
extern "C" void __aeabi_dmul();

PXT_SHIMS_BEGIN
(uint32_t)(void*)::pxt::afterProgramPage,
(uint32_t)(void*)::pxt::dumpDmesg,
(uint32_t)(void*)::pxt::runAction3,
(uint32_t)(void*)::pxt::runAction2,
(uint32_t)(void*)::pxt::runAction1,
(uint32_t)(void*)::pxt::runAction0,
(uint32_t)(void*)::pxt::mkAction,
(uint32_t)(void*)::pxt::allocate,
(uint32_t)(void*)::pxt::templateHash,
(uint32_t)(void*)::pxt::programHash,
(uint32_t)(void*)::pxt::programSize,
(uint32_t)(void*)::pxt::getNumGlobals,
(uint32_t)(void*)::pxt::mkClassInstance,
(uint32_t)(void*)::pxt::debugMemLeaks,
(uint32_t)(void*)::pxt::anyPrint,
(uint32_t)(void*)::pxt::toInt,
(uint32_t)(void*)::pxt::toUInt,
(uint32_t)(void*)::pxt::toDouble,
(uint32_t)(void*)::pxt::toFloat,
(uint32_t)(void*)::pxt::fromDouble,
(uint32_t)(void*)::pxt::fromFloat,
(uint32_t)(void*)::pxt::fromInt,
(uint32_t)(void*)::pxt::fromUInt,
(uint32_t)(void*)::pxt::fromBool,
(uint32_t)(void*)::pxt::eq_bool,
(uint32_t)(void*)::pxt::eqq_bool,
(uint32_t)(void*)::pxt::incr,
(uint32_t)(void*)::pxt::decr,
(uint32_t)(void*)::pxt::getVTable,
(uint32_t)(void*)::pxt::RefRecord_destroy,
(uint32_t)(void*)::pxt::RefRecord_print,
(uint32_t)(void*)::numops::stringConv,
(uint32_t)(void*)::numops::toString,
(uint32_t)(void*)::String_::compare,
(uint32_t)(void*)::String_::mkEmpty,
(uint32_t)(void*)::String_::fromCharCode,
(uint32_t)(void*)::String_::charAt,
(uint32_t)(void*)::String_::charCodeAt,
(uint32_t)(void*)::String_::concat,
(uint32_t)(void*)::String_::length,
(uint32_t)(void*)::String_::toNumber,
(uint32_t)(void*)::String_::substr,
(uint32_t)(void*)::String_::indexOf,
(uint32_t)(void*)::String_::includes,
(uint32_t)(void*)::Boolean_::bang,
(uint32_t)(void*)::pxt::switch_eq,
(uint32_t)(void*)::langsupp::ptreq,
(uint32_t)(void*)::langsupp::ptreqq,
(uint32_t)(void*)::langsupp::ptrneq,
(uint32_t)(void*)::langsupp::ptrneqq,
(uint32_t)(void*)::numops::toBool,
(uint32_t)(void*)::numops::toBoolDecr,
(uint32_t)(void*)::numops::adds,
(uint32_t)(void*)::numops::subs,
(uint32_t)(void*)::numops::muls,
(uint32_t)(void*)::numops::div,
(uint32_t)(void*)::numops::mod,
(uint32_t)(void*)::numops::lsls,
(uint32_t)(void*)::numops::lsrs,
(uint32_t)(void*)::numops::asrs,
(uint32_t)(void*)::numops::eors,
(uint32_t)(void*)::numops::orrs,
(uint32_t)(void*)::numops::bnot,
(uint32_t)(void*)::numops::ands,
(uint32_t)(void*)::numops::lt_bool,
(uint32_t)(void*)::numops::le,
(uint32_t)(void*)::numops::lt,
(uint32_t)(void*)::numops::ge,
(uint32_t)(void*)::numops::gt,
(uint32_t)(void*)::numops::eq,
(uint32_t)(void*)::numops::neq,
(uint32_t)(void*)::numops::eqq,
(uint32_t)(void*)::numops::neqq,
(uint32_t)(void*)::Math_::pow,
(uint32_t)(void*)::Math_::atan2,
(uint32_t)(void*)::Math_::random,
(uint32_t)(void*)::Math_::randomRange,
(uint32_t)(void*)::Math_::log,
(uint32_t)(void*)::Math_::log10,
(uint32_t)(void*)::Math_::tan,
(uint32_t)(void*)::Math_::sin,
(uint32_t)(void*)::Math_::cos,
(uint32_t)(void*)::Math_::atan,
(uint32_t)(void*)::Math_::asin,
(uint32_t)(void*)::Math_::acos,
(uint32_t)(void*)::Math_::sqrt,
(uint32_t)(void*)::Math_::floor,
(uint32_t)(void*)::Math_::ceil,
(uint32_t)(void*)::Math_::trunc,
(uint32_t)(void*)::Math_::round,
(uint32_t)(void*)::Math_::imul,
(uint32_t)(void*)::Math_::idiv,
(uint32_t)(void*)::Array_::mk,
(uint32_t)(void*)::Array_::length,
(uint32_t)(void*)::Array_::setLength,
(uint32_t)(void*)::Array_::push,
(uint32_t)(void*)::Array_::pop,
(uint32_t)(void*)::Array_::getAt,
(uint32_t)(void*)::Array_::setAt,
(uint32_t)(void*)::Array_::removeAt,
(uint32_t)(void*)::Array_::insertAt,
(uint32_t)(void*)::Array_::indexOf,
(uint32_t)(void*)::Array_::removeElement,
(uint32_t)(void*)::pxt::ptrOfLiteral,
(uint32_t)(void*)::pxt::programSize,
(uint32_t)(void*)::pxt::getConfig,
(uint32_t)(void*)::pxtrt::ldloc,
(uint32_t)(void*)::pxtrt::ldlocRef,
(uint32_t)(void*)::pxtrt::stloc,
(uint32_t)(void*)::pxtrt::stlocRef,
(uint32_t)(void*)::pxtrt::mkloc,
(uint32_t)(void*)::pxtrt::mklocRef,
(uint32_t)(void*)::pxtrt::ldfld,
(uint32_t)(void*)::pxtrt::ldfldRef,
(uint32_t)(void*)::pxtrt::stfld,
(uint32_t)(void*)::pxtrt::stfldRef,
(uint32_t)(void*)::pxtrt::stclo,
(uint32_t)(void*)::pxtrt::panic,
(uint32_t)(void*)::pxtrt::emptyToNull,
(uint32_t)(void*)::pxtrt::ptrToBool,
(uint32_t)(void*)::pxtrt::mkMap,
(uint32_t)(void*)::pxtrt::mapGet,
(uint32_t)(void*)::pxtrt::mapGetRef,
(uint32_t)(void*)::pxtrt::mapSet,
(uint32_t)(void*)::pxtrt::mapSetRef,
(uint32_t)(void*)::pxtrt::getGlobalsPtr,
(uint32_t)(void*)::pxtrt::runtimeWarning,
(uint32_t)(void*)::pxt::valType,
(uint32_t)(void*)::pxt::typeOf,
PXT_FNPTR(::__aeabi_dadd),
PXT_FNPTR(::__aeabi_dcmplt),
PXT_FNPTR(::__aeabi_dcmpgt),
PXT_FNPTR(::__aeabi_dsub),
PXT_FNPTR(::__aeabi_ddiv),
PXT_FNPTR(::__aeabi_dmul),
(uint32_t)(void*)::pxt::afterProgramPage,
(uint32_t)(void*)::images::createImage,
(uint32_t)(void*)::images::createBigImage,
(uint32_t)(void*)::ImageMethods::plotImage,
(uint32_t)(void*)::ImageMethods::showImage,
(uint32_t)(void*)::ImageMethods::plotFrame,
(uint32_t)(void*)::ImageMethods::scrollImage,
(uint32_t)(void*)::ImageMethods::clear,
(uint32_t)(void*)::ImageMethods::setPixelBrightness,
(uint32_t)(void*)::ImageMethods::pixelBrightness,
(uint32_t)(void*)::ImageMethods::width,
(uint32_t)(void*)::ImageMethods::height,
(uint32_t)(void*)::ImageMethods::setPixel,
(uint32_t)(void*)::ImageMethods::pixel,
(uint32_t)(void*)::ImageMethods::showFrame,
(uint32_t)(void*)::basic::showLeds,
(uint32_t)(void*)::basic::showString,
(uint32_t)(void*)::basic::clearScreen,
(uint32_t)(void*)::basic::showAnimation,
(uint32_t)(void*)::basic::plotLeds,
(uint32_t)(void*)::basic::forever,
(uint32_t)(void*)::basic::pause,
(uint32_t)(void*)::input::onButtonPressed,
(uint32_t)(void*)::input::onGesture,
(uint32_t)(void*)::input::onPinPressed,
(uint32_t)(void*)::input::onPinReleased,
(uint32_t)(void*)::input::buttonIsPressed,
(uint32_t)(void*)::input::pinIsPressed,
(uint32_t)(void*)::input::acceleration,
(uint32_t)(void*)::input::lightLevel,
(uint32_t)(void*)::input::compassHeading,
(uint32_t)(void*)::input::temperature,
(uint32_t)(void*)::input::rotation,
(uint32_t)(void*)::input::magneticForce,
(uint32_t)(void*)::input::runningTime,
(uint32_t)(void*)::input::runningTimeMicros,
(uint32_t)(void*)::input::calibrateCompass,
(uint32_t)(void*)::input::setAccelerometerRange,
(uint32_t)(void*)::control::inBackground,
(uint32_t)(void*)::control::reset,
(uint32_t)(void*)::control::waitMicros,
(uint32_t)(void*)::control::raiseEvent,
(uint32_t)(void*)::control::onEvent,
(uint32_t)(void*)::control::eventValue,
(uint32_t)(void*)::control::eventTimestamp,
(uint32_t)(void*)::control::deviceName,
(uint32_t)(void*)::control::deviceSerialNumber,
(uint32_t)(void*)::control::__midiSend,
(uint32_t)(void*)::control::__log,
(uint32_t)(void*)::led::plot,
(uint32_t)(void*)::led::plotBrightness,
(uint32_t)(void*)::led::unplot,
(uint32_t)(void*)::led::point,
(uint32_t)(void*)::led::brightness,
(uint32_t)(void*)::led::setBrightness,
(uint32_t)(void*)::led::stopAnimation,
(uint32_t)(void*)::led::setDisplayMode,
(uint32_t)(void*)::led::displayMode,
(uint32_t)(void*)::led::enable,
(uint32_t)(void*)::led::screenshot,
(uint32_t)(void*)::pins::getPinAddress,
(uint32_t)(void*)::pins::digitalReadPin,
(uint32_t)(void*)::pins::digitalWritePin,
(uint32_t)(void*)::pins::analogReadPin,
(uint32_t)(void*)::pins::analogWritePin,
(uint32_t)(void*)::pins::analogSetPeriod,
(uint32_t)(void*)::pins::onPulsed,
(uint32_t)(void*)::pins::pulseDuration,
(uint32_t)(void*)::pins::pulseIn,
(uint32_t)(void*)::pins::servoWritePin,
(uint32_t)(void*)::pins::servoSetPulse,
(uint32_t)(void*)::pins::analogSetPitchPin,
(uint32_t)(void*)::pins::analogPitch,
(uint32_t)(void*)::pins::setPull,
(uint32_t)(void*)::pins::setEvents,
(uint32_t)(void*)::pins::createBuffer,
(uint32_t)(void*)::pins::i2cReadBuffer,
(uint32_t)(void*)::pins::i2cWriteBuffer,
(uint32_t)(void*)::pins::spiWrite,
(uint32_t)(void*)::pins::spiFrequency,
(uint32_t)(void*)::pins::spiFormat,
(uint32_t)(void*)::pins::spiPins,
(uint32_t)(void*)::serial::readUntil,
(uint32_t)(void*)::serial::readString,
(uint32_t)(void*)::serial::onDataReceived,
(uint32_t)(void*)::serial::writeString,
(uint32_t)(void*)::serial::writeBuffer,
(uint32_t)(void*)::serial::readBuffer,
(uint32_t)(void*)::serial::redirect,
(uint32_t)(void*)::serial::redirectToUSB,
(uint32_t)(void*)::BufferMethods::getBytes,
(uint32_t)(void*)::BufferMethods::getByte,
(uint32_t)(void*)::BufferMethods::setByte,
(uint32_t)(void*)::BufferMethods::setNumber,
(uint32_t)(void*)::BufferMethods::getNumber,
(uint32_t)(void*)::BufferMethods::length,
(uint32_t)(void*)::BufferMethods::fill,
(uint32_t)(void*)::BufferMethods::slice,
(uint32_t)(void*)::BufferMethods::shift,
(uint32_t)(void*)::BufferMethods::toHex,
(uint32_t)(void*)::BufferMethods::rotate,
(uint32_t)(void*)::BufferMethods::write,
(uint32_t)(void*)::control::createBuffer,
(uint32_t)(void*)::radio::raiseEvent,
(uint32_t)(void*)::radio::sendNumber,
(uint32_t)(void*)::radio::sendValue,
(uint32_t)(void*)::radio::sendString,
(uint32_t)(void*)::radio::sendBuffer,
(uint32_t)(void*)::radio::writeValueToSerial,
(uint32_t)(void*)::radio::writeReceivedPacketToSerial,
(uint32_t)(void*)::radio::receiveNumber,
(uint32_t)(void*)::radio::onDataReceived,
(uint32_t)(void*)::radio::receiveString,
(uint32_t)(void*)::radio::receivedSignalStrength,
(uint32_t)(void*)::radio::setGroup,
(uint32_t)(void*)::radio::setTransmitPower,
(uint32_t)(void*)::radio::setTransmitSerialNumber,
(uint32_t)(void*)::radio::receivedNumber,
(uint32_t)(void*)::radio::receivedSerial,
(uint32_t)(void*)::radio::receivedString,
(uint32_t)(void*)::radio::receivedBuffer,
(uint32_t)(void*)::radio::receivedTime,

PXT_SHIMS_END
