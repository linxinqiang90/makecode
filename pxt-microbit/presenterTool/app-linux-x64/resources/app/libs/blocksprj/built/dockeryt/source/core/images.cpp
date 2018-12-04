#include "pxt.h"

PXT_VTABLE_BEGIN(RefMImage, 0, 0)
PXT_VTABLE_END

RefMImage::RefMImage(ImageData *d) : PXT_VTABLE_INIT(RefMImage), img(d) {
    img->incr();
}

void RefMImage::destroy(RefMImage *t) {
    t->img->decr();
}

void RefMImage::print(RefMImage *t) {
    DMESG("RefMImage %p r=%d size=%d x %d", t, t->refcnt, img->width, img->height);
}

void RefMImage::makeWritable() {
    if (img->isReadOnly()) {
        MicroBitImage i(img);
        img = i.clone().leakData();
    }
}

//
//
//
//
//
namespace images {
//
//
//
//
//
//
Image createImage(ImageLiteral_ leds) {
    return new RefMImage(imageBytes(leds));
}

//
//
//
//
//
//
Image createBigImage(ImageLiteral_ leds) {
    return createImage(leds);
}
} // namespace images

namespace ImageMethods {
//
//
//
//
//
void plotImage(Image i, int xOffset = 0) {
    uBit.display.print(MicroBitImage(i->img), -xOffset, 0, 0, 0);
}

//
//
//
//
//
//
//
void showImage(Image sprite, int xOffset, int interval = 400) {
    uBit.display.print(MicroBitImage(sprite->img), -xOffset, 0, 0, interval);
}

//
//
//
//
//
//
void plotFrame(Image i, int xOffset) {
    // TODO showImage() used in original implementation
    plotImage(i, xOffset * 5);
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
void scrollImage(Image id, int frameOffset, int interval) {
    MicroBitImage i(id->img);
    uBit.display.animate(i, interval, frameOffset, MICROBIT_DISPLAY_ANIMATE_DEFAULT_POS, 0);
}

//
//
//
//
//
void clear(Image i) {
    i->makeWritable();
    MicroBitImage(i->img).clear();
}

//
//
//
//
//
void setPixelBrightness(Image i, int x, int y, int value) {
    i->makeWritable();
    MicroBitImage(i->img).setPixelValue(x, y, value);
}

//
//
//
//
//
int pixelBrightness(Image i, int x, int y) {
    int pix = MicroBitImage(i->img).getPixelValue(x, y);
    if (pix < 0)
        return 0;
    return pix;
}

//
//
//
//
int width(Image i) {
    return i->img->width;
}

//
//
//
//
int height(Image i) {
    return i->img->height;
}

//
//
//
//
//
//
//
//
void setPixel(Image i, int x, int y, bool value) {
    setPixelBrightness(i, x, y, value ? 255 : 0);
}

//
//
//
//
//
//
//
bool pixel(Image i, int x, int y) {
    return pixelBrightness(i, x, y) > 0;
}

//
//
//
//
//
//
void showFrame(Image i, int frame, int interval = 400) {
    showImage(i, frame * 5, interval);
}
} // namespace ImageMethods
