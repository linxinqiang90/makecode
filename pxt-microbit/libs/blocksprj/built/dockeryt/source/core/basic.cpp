#include "pxt.h"


//
//
//
//
namespace basic {

//
//
//
//
//
//
//
//
//
//
//
    void showLeds(ImageLiteral_ leds, int interval = 400) {
      uBit.display.print(MicroBitImage(imageBytes(leds)), 0, 0, 0, interval);
    }

//
//
//
//
//
//
//
//
//
//
//
//
    void showString(String text, int interval = 150) {
      if (interval <= 0)
        interval = 1;
      int l = text ? text->length : 0;
      if (l == 0) {
        uBit.display.clear();
        fiber_sleep(interval * 5);
      } else if (l > 1) {
        uBit.display.scroll(MSTR(text), interval);
      } else {
        uBit.display.printChar(text->data[0], interval * 5);
      }
    }

//
//
//
//
//
//
//
    void clearScreen() {
      uBit.display.image.clear();
    }

//
//
//
//
//
//
//
    void showAnimation(ImageLiteral_ leds, int interval = 400) {
      uBit.display.animate(MicroBitImage(imageBytes(leds)), interval, 5, 0, 0);
    }

//
//
//
//
//
//
    void plotLeds(ImageLiteral_ leds) {
      MicroBitImage i(imageBytes(leds));
      uBit.display.print(i, 0, 0, 0, 0);
    }

//
//
//
//
//
//
    void forever(Action a) {
      runForever(a);
    }

//
//
//
//
//
//
//
//
    void pause(int ms) {
      fiber_sleep(ms);
    }
}
