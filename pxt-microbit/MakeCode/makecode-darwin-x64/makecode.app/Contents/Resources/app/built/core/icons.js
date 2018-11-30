/*
The MIT License (MIT)

Copyright (c) 2013-2016 The MicroPython-on-micro:bit Developers, as listed
in the accompanying AUTHORS file

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
// Images from file microbitconstimage.cpp https://github.com/bbcmicrobit/micropython
var IconNames;
(function (IconNames) {
    //% block="heart"
    //% jres=icons.heart
    IconNames[IconNames["Heart"] = 0] = "Heart";
    //% block="small heart"
    //% jres=icons.smallheart
    IconNames[IconNames["SmallHeart"] = 1] = "SmallHeart";
    //% block="yes"
    //% jres=icons.yes
    IconNames[IconNames["Yes"] = 2] = "Yes";
    //% block="no"
    //% jres=icons.no
    IconNames[IconNames["No"] = 3] = "No";
    //% block="happy"
    //% jres=icons.happy
    IconNames[IconNames["Happy"] = 4] = "Happy";
    //% block="sad"
    //% jres=icons.sad
    IconNames[IconNames["Sad"] = 5] = "Sad";
    //% block="confused"
    //% jres=icons.confused
    IconNames[IconNames["Confused"] = 6] = "Confused";
    //% block="angry"
    //% jres=icons.angry
    IconNames[IconNames["Angry"] = 7] = "Angry";
    //% block="asleep"
    //% jres=icons.asleep
    IconNames[IconNames["Asleep"] = 8] = "Asleep";
    //% block="surprised"
    //% jres=icons.surprised
    IconNames[IconNames["Surprised"] = 9] = "Surprised";
    //% block="silly"
    //% jres=icons.silly
    IconNames[IconNames["Silly"] = 10] = "Silly";
    //% block="fabulous"
    //% jres=icons.fabulous
    IconNames[IconNames["Fabulous"] = 11] = "Fabulous";
    //% block="meh"
    //% jres=icons.meh
    IconNames[IconNames["Meh"] = 12] = "Meh";
    //% block="t-shirt"
    //% jres=icons.tshirt
    IconNames[IconNames["TShirt"] = 13] = "TShirt";
    //% block="roller skate"
    //% jres=icons.rollerskate
    IconNames[IconNames["Rollerskate"] = 14] = "Rollerskate";
    //% block="duck"
    //% jres=icons.duck
    IconNames[IconNames["Duck"] = 15] = "Duck";
    //% block="house"
    //% jres=icons.house
    IconNames[IconNames["House"] = 16] = "House";
    //% block="tortoise"
    //% jres=icons.tortoise
    IconNames[IconNames["Tortoise"] = 17] = "Tortoise";
    //% block="butterfly"
    //% jres=icons.butterfly
    IconNames[IconNames["Butterfly"] = 18] = "Butterfly";
    //% block="stick figure"
    //% jres=icons.stickfigure
    IconNames[IconNames["StickFigure"] = 19] = "StickFigure";
    //% block="ghost"
    //% jres=icons.ghost
    IconNames[IconNames["Ghost"] = 20] = "Ghost";
    //% block="sword"
    //% jres=icons.sword
    IconNames[IconNames["Sword"] = 21] = "Sword";
    //% block="giraffe"
    //% jres=icons.giraffe
    IconNames[IconNames["Giraffe"] = 22] = "Giraffe";
    //% block="skull"
    //% jres=icons.skull
    IconNames[IconNames["Skull"] = 23] = "Skull";
    //% block="umbrella"
    //% jres=icons.umbrella
    IconNames[IconNames["Umbrella"] = 24] = "Umbrella";
    //% block="snake"
    //% jres=icons.snake
    IconNames[IconNames["Snake"] = 25] = "Snake";
    //% block="rabbit"
    //% jres=icons.rabbit
    IconNames[IconNames["Rabbit"] = 26] = "Rabbit";
    //% block="cow"
    //% jres=icons.cow
    IconNames[IconNames["Cow"] = 27] = "Cow";
    //% block="quarter note"
    //% jres=icons.quarternote
    IconNames[IconNames["QuarterNote"] = 28] = "QuarterNote";
    //% block="eigth note"
    //% jres=icons.eigthnote
    IconNames[IconNames["EigthNote"] = 29] = "EigthNote";
    //% block="pitchfork"
    //% jres=icons.pitchfork
    IconNames[IconNames["Pitchfork"] = 30] = "Pitchfork";
    //% block="target"
    //% jres=icons.target
    IconNames[IconNames["Target"] = 31] = "Target";
    //% block="triangle"
    //% jres=icons.triangle
    IconNames[IconNames["Triangle"] = 32] = "Triangle";
    //% block="left triangle"
    //% jres=icons.lefttriangle
    IconNames[IconNames["LeftTriangle"] = 33] = "LeftTriangle";
    //% block="chess board"
    //% jres=icons.chessboard
    IconNames[IconNames["Chessboard"] = 34] = "Chessboard";
    //% block="diamond"
    //% jres=icons.diamond
    IconNames[IconNames["Diamond"] = 35] = "Diamond";
    //% block="small diamond"
    //% jres=icons.smalldiamond
    IconNames[IconNames["SmallDiamond"] = 36] = "SmallDiamond";
    //% block="square"
    //% jres=icons.square
    IconNames[IconNames["Square"] = 37] = "Square";
    //% block="small square"
    //% jres=icons.smallsquare
    IconNames[IconNames["SmallSquare"] = 38] = "SmallSquare";
    //% block="scissors"
    //% jres=icons.scissors
    IconNames[IconNames["Scissors"] = 39] = "Scissors";
})(IconNames || (IconNames = {}));
var ArrowNames;
(function (ArrowNames) {
    //% blockIdentity=images.arrowNumber block="North"
    ArrowNames[ArrowNames["North"] = 0] = "North";
    //% blockIdentity=images.arrowNumber block="North East"
    ArrowNames[ArrowNames["NorthEast"] = 1] = "NorthEast";
    //% blockIdentity=images.arrowNumber block="East"
    ArrowNames[ArrowNames["East"] = 2] = "East";
    //% blockIdentity=images.arrowNumber block="South East"
    ArrowNames[ArrowNames["SouthEast"] = 3] = "SouthEast";
    //% blockIdentity=images.arrowNumber block="South"
    ArrowNames[ArrowNames["South"] = 4] = "South";
    //% blockIdentity=images.arrowNumber block="South West"
    ArrowNames[ArrowNames["SouthWest"] = 5] = "SouthWest";
    //% blockIdentity=images.arrowNumber block="West"
    ArrowNames[ArrowNames["West"] = 6] = "West";
    //% blockIdentity=images.arrowNumber block="North West"
    ArrowNames[ArrowNames["NorthWest"] = 7] = "NorthWest";
})(ArrowNames || (ArrowNames = {}));
var basic;
(function (basic) {
    /**
     * Draws the selected icon on the LED screen
     * @param icon the predifined icon id
     * @param interval the amount of time (milliseconds) to show the icon. Default is 600.
     */
    //% weight=90 blockGap=8
    //% blockId=basic_show_icon
    //% block="show icon %i" icon="\uf00a"
    //% parts="ledmatrix"
    //% help=basic/show-icon
    //% icon.fieldEditor="imagedropdown"
    //% icon.fieldOptions.columns="5"
    //% icon.fieldOptions.width="380"
    //% icon.fieldOptions.maxRows=4
    function showIcon(icon, interval) {
        if (interval === void 0) { interval = 600; }
        var res = images.iconImage(icon);
        res.showImage(0, interval);
    }
    basic.showIcon = showIcon;
    /**
     * Draws an arrow on the LED screen
     * @param direction the direction of the arrow
     * @param interval the amount of time (milliseconds) to show the icon. Default is 600.
     */
    //% weight=50 blockGap=8
    //% blockId=basic_show_arrow
    //% block="show arrow %i=device_arrow"
    //% parts="ledmatrix"
    //% advanced=true
    //% help=basic/show-arrow
    function showArrow(direction, interval) {
        if (interval === void 0) { interval = 600; }
        var res = images.arrowImage(direction);
        res.showImage(0, interval);
    }
    basic.showArrow = showArrow;
})(basic || (basic = {}));
var images;
(function (images) {
    //% weight=50 blockGap=8
    //% help=images/arrow-image
    //% blockId=builtin_arrow_image block="arrow image %i=device_arrow"
    function arrowImage(i) {
        switch (i) {
            // compass directions
            case ArrowNames.North: return images.createImage("\n                                        . . # . .\n                                        . # # # .\n                                        # . # . #\n                                        . . # . .\n                                        . . # . .");
            case ArrowNames.NorthEast: return images.createImage("\n                                        . . # # #\n                                        . . . # #\n                                        . . # . #\n                                        . # . . .\n                                        # . . . .");
            case ArrowNames.East: return images.createImage("\n                                        . . # . .\n                                        . . . # .\n                                        # # # # #\n                                        . . . # .\n                                        . . # . .");
            case ArrowNames.SouthEast: return images.createImage("\n                                        # . . . .\n                                        . # . . .\n                                        . . # . #\n                                        . . . # #\n                                        . . # # #");
            case ArrowNames.South: return images.createImage("\n                                        . . # . .\n                                        . . # . .\n                                        # . # . #\n                                        . # # # .\n                                        . . # . .");
            case ArrowNames.SouthWest: return images.createImage("\n                                        . . . . #\n                                        . . . # .\n                                        # . # . .\n                                        # # . . .\n                                        # # # . .");
            case ArrowNames.West: return images.createImage("\n                                        . . # . .\n                                        . # . . .\n                                        # # # # #\n                                        . # . . .\n                                        . . # . .");
            case ArrowNames.NorthWest: return images.createImage("\n                                        # # # . .\n                                        # # . . .\n                                        # . # . .\n                                        . . . # .\n                                        . . . . #");
            default: return images.createImage("\n                                        . . . . .\n                                        . . . . .\n                                        . . . . .\n                                        . . . . .\n                                        . . . . .\n                                        ");
        }
    }
    images.arrowImage = arrowImage;
    //% weight=50 blockGap=8
    //% help=images/icon-image
    //% blockId=builtin_image block="icon image %i"
    //% i.fieldEditor="imagedropdown"
    //% i.fieldOptions.columns="5"
    //% i.fieldOptions.width="380"
    //% i.fieldOptions.maxRows=4
    function iconImage(i) {
        switch (i) {
            case IconNames.Heart: return images.createImage("\n                                        . # . # .\n                                        # # # # #\n                                        # # # # #\n                                        . # # # .\n                                        . . # . .");
            case IconNames.SmallHeart: return images.createImage("\n                                        . . . . .\n                                        . # . # .\n                                        . # # # .\n                                        . . # . .\n                                        . . . . .");
            //faces
            case IconNames.Happy: return images.createImage("\n                                        . . . . .\n                                        . # . # .\n                                        . . . . .\n                                        # . . . #\n                                        . # # # .");
            case IconNames.Sad: return images.createImage("\n                                        . . . . .\n                                        . # . # .\n                                        . . . . .\n                                        . # # # .\n                                        # . . . #");
            case IconNames.Confused: return images.createImage("\n                                        . . . . .\n                                        . # . # .\n                                        . . . . .\n                                        . # . # .\n                                        # . # . #");
            case IconNames.Angry: return images.createImage("\n                                        # . . . #\n                                        . # . # .\n                                        . . . . .\n                                        # # # # #\n                                        # . # . #");
            case IconNames.Asleep: return images.createImage("\n                                        . . . . .\n                                        # # . # #\n                                        . . . . .\n                                        . # # # .\n                                        . . . . .");
            case IconNames.Surprised: return images.createImage("\n                                        . # . # .\n                                        . . . . .\n                                        . . # . .\n                                        . # . # .\n                                        . . # . .");
            case IconNames.Silly: return images.createImage("\n                                        # . . . #\n                                        . . . . .\n                                        # # # # #\n                                        . . . # #\n                                        . . . # #");
            case IconNames.Fabulous: return images.createImage("\n                                        # # # # #\n                                        # # . # #\n                                        . . . . .\n                                        . # . # .\n                                        . # # # .");
            case IconNames.Meh: return images.createImage("\n                                        # # . # #\n                                        . . . . .\n                                        . . . # .\n                                        . . # . .\n                                        . # . . .");
            case IconNames.Yes: return images.createImage("\n                                        . . . . .\n                                        . . . . #\n                                        . . . # .\n                                        # . # . .\n                                        . # . . .");
            case IconNames.No: return images.createImage("\n                                        # . . . #\n                                        . # . # .\n                                        . . # . .\n                                        . # . # .\n                                        # . . . #");
            case IconNames.Triangle: return images.createImage("\n                                        . . . . .\n                                        . . # . .\n                                        . # . # .\n                                        # # # # #\n                                        . . . . .");
            case IconNames.LeftTriangle: return images.createImage("\n                                        # . . . .\n                                        # # . . .\n                                        # . # . .\n                                        # . . # .\n                                        # # # # #");
            case IconNames.Chessboard: return images.createImage("\n                                        . # . # .\n                                        # . # . #\n                                        . # . # .\n                                        # . # . #\n                                        . # . # .");
            case IconNames.Diamond: return images.createImage("\n                                        . . # . .\n                                        . # . # .\n                                        # . . . #\n                                        . # . # .\n                                        . . # . .");
            case IconNames.SmallDiamond: return images.createImage("\n                                        . . . . .\n                                        . . # . .\n                                        . # . # .\n                                        . . # . .\n                                        . . . . .");
            case IconNames.Square: return images.createImage("\n                                        # # # # #\n                                        # . . . #\n                                        # . . . #\n                                        # . . . #\n                                        # # # # #");
            case IconNames.SmallSquare: return images.createImage("\n                                        . . . . .\n                                        . # # # .\n                                        . # . # .\n                                        . # # # .\n                                        . . . . .");
            case IconNames.Scissors: return images.createImage("\n                                        # # . . #\n                                        # # . # .\n                                        . . # . .\n                                        # # . # .\n                                        # # . . #");
            // The following images were designed by Abbie Brooks.
            case IconNames.TShirt: return images.createImage("\n                                        # # . # #\n                                        # # # # #\n                                        . # # # .\n                                        . # # # .\n                                        . # # # .");
            case IconNames.Rollerskate: return images.createImage("\n                                        . . . # #\n                                        . . . # #\n                                        # # # # #\n                                        # # # # #\n                                        . # . # .");
            case IconNames.Duck: return images.createImage("\n                                        . # # . .\n                                        # # # . .\n                                        . # # # #\n                                        . # # # .\n                                        . . . . .");
            case IconNames.House: return images.createImage("\n                                        . . # . .\n                                        . # # # .\n                                        # # # # #\n                                        . # # # .\n                                        . # . # .");
            case IconNames.Tortoise: return images.createImage("\n                                        . . . . .\n                                        . # # # .\n                                        # # # # #\n                                        . # . # .\n                                        . . . . .");
            case IconNames.Butterfly: return images.createImage("\n                                        # # . # #\n                                        # # # # #\n                                        . . # . .\n                                        # # # # #\n                                        # # . # #");
            case IconNames.StickFigure: return images.createImage("\n                                        . . # . .\n                                        # # # # #\n                                        . . # . .\n                                        . # . # .\n                                        # . . . #");
            case IconNames.Ghost: return images.createImage("\n                                        . # # # .\n                                        # . # . #\n                                        # # # # #\n                                        # # # # #\n                                        # . # . #");
            case IconNames.Sword: return images.createImage("\n                                        . . # . .\n                                        . . # . .\n                                        . . # . .\n                                        . # # # .\n                                        . . # . .");
            case IconNames.Giraffe: return images.createImage("\n                                        # # . . .\n                                        . # . . .\n                                        . # . . .\n                                        . # # # .\n                                        . # . # .");
            case IconNames.Skull: return images.createImage("\n                                        . # # # .\n                                        # . # . #\n                                        # # # # #\n                                        . # # # .\n                                        . # # # .");
            case IconNames.Umbrella: return images.createImage("\n                                        . # # # .\n                                        # # # # #\n                                        . . # . .\n                                        # . # . .\n                                        # # # . .");
            case IconNames.Snake: return images.createImage("\n                                        # # . . .\n                                        # # . # #\n                                        . # . # .\n                                        . # # # .\n                                        . . . . .");
            // animals
            case IconNames.Rabbit: return images.createImage("\n                                        # . # . .\n                                        # . # . .\n                                        # # # # .\n                                        # # . # .\n                                        # # # # .");
            case IconNames.Cow: return images.createImage("\n                                        # . . . #\n                                        # . . . #\n                                        # # # # #\n                                        . # # # .\n                                        . . # . .");
            // musical notes
            case IconNames.QuarterNote: return images.createImage("\n                                        . . # . .\n                                        . . # . .\n                                        . . # . .\n                                        # # # . .\n                                        # # # . .");
            case IconNames.EigthNote: return images.createImage("\n                                        . . # . .\n                                        . . # # .\n                                        . . # . #\n                                        # # # . .\n                                        # # # . .");
            // other icons
            case IconNames.Pitchfork: return images.createImage("\n                                        # . # . #\n                                        # . # . #\n                                        # # # # #\n                                        . . # . .\n                                        . . # . .");
            case IconNames.Target: return images.createImage("\n                                        . . # . .\n                                        . # # # .\n                                        # # . # #\n                                        . # # # .\n                                        . . # . .");
            default: return images.createImage("\n                                        . . . . .\n                                        . . . . .\n                                        . . . . .\n                                        . . . . .\n                                        . . . . .\n                                        ");
        }
    }
    images.iconImage = iconImage;
    //% weight=50 blockGap=8
    //% help=images/arrow-number
    //% blockId=device_arrow block="%arrow"
    //% shim=TD_ID
    function arrowNumber(arrow) {
        return arrow;
    }
    images.arrowNumber = arrowNumber;
})(images || (images = {}));
