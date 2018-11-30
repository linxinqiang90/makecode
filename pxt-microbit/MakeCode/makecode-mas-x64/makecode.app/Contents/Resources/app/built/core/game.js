var Direction;
(function (Direction) {
    //% block=right
    Direction[Direction["Right"] = 0] = "Right";
    //% block=left
    Direction[Direction["Left"] = 1] = "Left";
})(Direction || (Direction = {}));
var LedSpriteProperty;
(function (LedSpriteProperty) {
    //% block=x
    LedSpriteProperty[LedSpriteProperty["X"] = 0] = "X";
    //% block=y
    LedSpriteProperty[LedSpriteProperty["Y"] = 1] = "Y";
    //% block=direction
    LedSpriteProperty[LedSpriteProperty["Direction"] = 2] = "Direction";
    //% block=brightness
    LedSpriteProperty[LedSpriteProperty["Brightness"] = 3] = "Brightness";
    //% block=blink
    LedSpriteProperty[LedSpriteProperty["Blink"] = 4] = "Blink";
})(LedSpriteProperty || (LedSpriteProperty = {}));
/**
 * A single-LED sprite game engine
 */
//% color=#007A4B weight=32 icon="\uf11b"
//% advanced=true
var game;
(function (game) {
    var _score = 0;
    var _life = 3;
    var _startTime = 0;
    var _endTime = 0;
    var _isGameOver = false;
    var _countdownPause = 0;
    var _level = 1;
    var _gameId = 0;
    var _img;
    var _sprites;
    var _paused = false;
    var _backgroundAnimation = false; // indicates if an auxiliary animation (and fiber) is already running
    /**
     * Creates a new LED sprite pointing to the right.
     * @param x sprite horizontal coordinate, eg: 2
     * @param y sprite vertical coordinate, eg: 2
     */
    //% weight=60 blockGap=8 help=game/create-sprite
    //% blockId=game_create_sprite block="create sprite at|x: %x|y: %y"
    //% parts="ledmatrix"
    function createSprite(x, y) {
        init();
        var p = new LedSprite(x, y);
        return p;
    }
    game.createSprite = createSprite;
    /**
     * Gets the current score
     */
    //% weight=9 help=game/score
    //% blockId=game_score block="score" blockGap=8
    function score() {
        return _score;
    }
    game.score = score;
    /**
     * Adds points to the current score and shows an animation
     * @param points amount of points to change, eg: 1
     */
    //% weight=10 help=game/add-score
    //% blockId=game_add_score block="change score by|%points" blockGap=8
    //% parts="ledmatrix"
    function addScore(points) {
        setScore(_score + points);
        if (!_paused && !_backgroundAnimation) {
            _backgroundAnimation = true;
            control.inBackground(function () {
                led.stopAnimation();
                basic.showAnimation("0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 0 1 0 0 0 0 0\n    0 0 0 0 0 0 0 1 0 0 0 1 1 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0\n    0 0 1 0 0 0 1 1 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n    0 0 0 0 0 0 0 1 0 0 0 1 1 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0\n    0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1 1 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 0 1 0 0 0 0 0", 20);
                _backgroundAnimation = false;
            });
        }
    }
    game.addScore = addScore;
    /**
     * Shows an animation, then starts a game countdown timer, which causes Game Over when it reaches 0
     * @param ms countdown duration in milliseconds, eg: 10000
     */
    //% weight=9 help=game/start-countdown
    //% blockId=game_start_countdown block="start countdown|(ms) %duration" blockGap=8
    //% parts="ledmatrix"
    function startCountdown(ms) {
        if (checkStart()) {
            basic.showAnimation("1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0\n0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0\n1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0\n0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0\n1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0", 400);
            _countdownPause = Math.max(500, ms);
            _startTime = -1;
            _endTime = input.runningTime() + _countdownPause;
            _paused = false;
            control.inBackground(function () {
                basic.pause(_countdownPause);
                gameOver();
            });
        }
    }
    game.startCountdown = startCountdown;
    /**
     * Displays a game over animation and the score.
     */
    //% weight=8 help=game/game-over
    //% blockId=game_game_over block="game over"
    //% parts="ledmatrix"
    function gameOver() {
        if (!_isGameOver) {
            _isGameOver = true;
            unplugEvents();
            led.stopAnimation();
            led.setBrightness(255);
            while (true) {
                for (var i = 0; i < 8; i++) {
                    basic.clearScreen();
                    basic.pause(100);
                    basic.showLeds("1 1 1 1 1\n1 1 1 1 1\n1 1 1 1 1\n1 1 1 1 1\n1 1 1 1 1", 300);
                }
                basic.showAnimation("1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0\n1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 0 0 1 1 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n1 1 0 1 1 1 0 0 0 1 1 0 0 0 1 1 0 0 0 1 1 0 0 0 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 1 0 0 1 1 1 0 0 0 1 1 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 1 1 1 1 0 0 1 1 1 0 0 0 1 1 0 0 0 0 1 0 0 0 0 0", 100);
                for (var j = 0; j < 3; j++) {
                    basic.showString(" GAMEOVER ", 100);
                    showScore();
                }
            }
        }
        else {
            // already in game over mode in another fiber
            while (true) {
                basic.pause(10000);
            }
        }
    }
    game.gameOver = gameOver;
    /**
     * Sets the current score value
     * @param value new score value.
     */
    //% blockId=game_set_score block="set score %points" blockGap=8
    //% weight=10 help=game/set-score
    function setScore(value) {
        _score = Math.max(0, value);
    }
    game.setScore = setScore;
    /**
     * Gets the current life
     */
    //% weight=10
    function life() {
        return _life;
    }
    game.life = life;
    /**
     * Sets the current life value
     * @param value current life value
     */
    //% weight=10 help=game/set-life
    //% blockId=game_set_life block="set life %value" blockGap=8
    function setLife(value) {
        _life = Math.max(0, value);
        if (_life <= 0) {
            gameOver();
        }
    }
    game.setLife = setLife;
    /**
     * Add life points to the current life amount
     * @param lives amount of lives to add
     */
    //% weight=10 help=game/add-life
    //% blockId=game_add_life block="add life %lives" blockGap=8
    function addLife(lives) {
        setLife(_life + lives);
    }
    game.addLife = addLife;
    /**
     * Gets the remaining time (since `start countdown`) or current time (since the device started or `start stopwatch`) in milliseconds.
     */
    //% weight=10
    function currentTime() {
        if (_endTime > 0) {
            return Math.max(0, _endTime - input.runningTime());
        }
        else {
            return input.runningTime() - _startTime;
        }
    }
    game.currentTime = currentTime;
    /**
     * Remove some life
     * @param life amount of life to remove
     */
    //% weight=10 help=game/remove-life
    //% parts="ledmatrix"
    //% blockId=game_remove_life block="remove life %life" blockGap=8
    function removeLife(life) {
        setLife(_life - life);
        if (!_paused)
            control.inBackground(function () {
                led.stopAnimation();
                basic.showAnimation("1 0 0 0 1 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0\n0 1 0 1 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0\n0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0\n0 1 0 1 0 0 0 0 0 0 0 1 0 1 0 0 0 0 0 0\n1 0 0 0 1 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0", 40);
            });
    }
    game.removeLife = removeLife;
    /**
     * Increments the level and display a message.
     */
    //% weight=10
    //% parts="ledmatrix"
    function levelUp() {
        _level = _level + 1;
        basic.showString("LEVEL:", 150);
        basic.showNumber(_level, 150);
    }
    game.levelUp = levelUp;
    /**
     * Gets the current level
     */
    //% weight=10
    function level() {
        return _level;
    }
    game.level = level;
    /**
     * Starts a stopwatch timer. `current time` will return the elapsed time.
     */
    //% weight=10
    function startStopwatch() {
        _startTime = input.runningTime();
        _endTime = -1;
    }
    game.startStopwatch = startStopwatch;
    /**
     * Gets a value indicating if the game is still running. Returns `false` if game over.
     */
    //% weight=10
    function isRunning() {
        var running;
        return !_isGameOver;
    }
    game.isRunning = isRunning;
    /**
     * Displays the score on the screen.
     */
    //%  weight=60
    //% parts="ledmatrix"
    function showScore() {
        basic.showString(" SCORE ", 100);
        basic.showNumber(_score, 150);
        basic.showString(" ", 150);
    }
    game.showScore = showScore;
    /**
     * Indicates if the game is display the game over sequence.
     */
    function isGameOver() {
        return _isGameOver;
    }
    game.isGameOver = isGameOver;
    /**
     * Indicates if the game rendering is paused to allow other animations
     */
    //%
    function isPaused() {
        return _paused;
    }
    game.isPaused = isPaused;
    /**
     * Pauses the game rendering engine to allow other animations
     */
    //% blockId=game_pause block="pause"
    //% advanced=true blockGap=8 help=game/pause
    function pause() {
        plot();
        _paused = true;
    }
    game.pause = pause;
    /**
     * Resumes the game rendering engine
     */
    //% blockId=game_resume block="resume"
    //% advanced=true blockGap=8 help=game/resumeP
    function resume() {
        _paused = false;
        plot();
    }
    game.resume = resume;
    /**
     * returns false if game can't start
     */
    function checkStart() {
        if (_countdownPause > 0 || _startTime > 0) {
            return false;
        }
        else {
            return true;
        }
    }
    function unplugEvents() {
        input.onButtonPressed(1 /* A */, function () { });
        input.onButtonPressed(2 /* B */, function () { });
        input.onButtonPressed(26 /* AB */, function () {
            control.reset();
        });
    }
    /**
     * A game sprite rendered as a single LED
     */
    //%
    var LedSprite = /** @class */ (function () {
        function LedSprite(x, y) {
            this._x = Math.clamp(0, 4, x);
            this._y = Math.clamp(0, 4, y);
            this._dir = 90;
            this._brightness = 255;
            this._enabled = true;
            init();
            _sprites.push(this);
            plot();
        }
        /**
         * Move a certain number of LEDs in the current direction
         * @param this the sprite to move
         * @param leds number of leds to move, eg: 1, -1
         */
        //% weight=50 help=game/move
        //% blockId=game_move_sprite block="%sprite|move by %leds" blockGap=8
        //% parts="ledmatrix"
        LedSprite.prototype.move = function (leds) {
            if (this._dir == 0) {
                this._y = this._y - leds;
            }
            else if (this._dir == 45) {
                this._x = this._x + leds;
                this._y = this._y - leds;
            }
            else if (this._dir == 90) {
                this._x = this._x + leds;
            }
            else if (this._dir == 135) {
                this._x = this._x + leds;
                this._y = this._y + leds;
            }
            else if (this._dir == 180) {
                this._y = this._y + leds;
            }
            else if (this._dir == -45) {
                this._x = this._x - leds;
                this._y = this._y - leds;
            }
            else if (this._dir == -90) {
                this._x = this._x - leds;
            }
            else {
                this._x = this._x - leds;
                this._y = this._y + leds;
            }
            this._x = Math.clamp(0, 4, this._x);
            this._y = Math.clamp(0, 4, this._y);
            plot();
        };
        /**
         * Go to this position on the screen
         * @param this TODO
         * @param x TODO
         * @param y TODO
         */
        //% parts="ledmatrix"
        LedSprite.prototype.goTo = function (x, y) {
            this._x = x;
            this._y = y;
            this._x = Math.clamp(0, 4, this._x);
            this._y = Math.clamp(0, 4, this._y);
            plot();
        };
        /**
         * If touching the edge of the stage and facing towards it, then turn away.
         * @param this TODO
         */
        //% weight=18 help=game/if-on-edge-bounce
        //% blockId=game_sprite_bounce block="%sprite|if on edge, bounce"
        //% parts="ledmatrix"
        LedSprite.prototype.ifOnEdgeBounce = function () {
            if (this._dir == 0 && this._y == 0) {
                this._dir = 180;
            }
            else if (this._dir == 45 && (this._x == 4 || this._y == 0)) {
                if (this._x == 0 && this._y == 0) {
                    this._dir = -135;
                }
                else if (this._y == 0) {
                    this._dir = 135;
                }
                else {
                    this._dir = -45;
                }
            }
            else if (this._dir == 90 && this._x == 4) {
                this._dir = -90;
            }
            else if (this._dir == 135 && (this._x == 4 || this._y == 4)) {
                if (this.x() == 4 && this.y() == 4) {
                    this._dir = -45;
                }
                else if (this._y == 4) {
                    this._dir = 45;
                }
                else {
                    this._dir = -135;
                }
            }
            else if (this._dir == 180 && this._y == 4) {
                this._dir = 0;
            }
            else if (this._dir == -45 && (this._x == 0 || this._y == 0)) {
                if (this.x() == 0 && this.y() == 0) {
                    this._dir = 135;
                }
                else if (this._y == 0) {
                    this._dir = -135;
                }
                else {
                    this._dir = 45;
                }
            }
            else if (this._dir == -90 && this._x == 0) {
                this._dir = 90;
            }
            else if (this._dir == -135 && (this._x == 0 || this._y == 4)) {
                if (this._x == 0 && this._y == 4) {
                    this._dir = 45;
                }
                else if (this._y == 4) {
                    this._dir = -45;
                }
                else {
                    this._dir = 135;
                }
            }
            plot();
        };
        /**
         * Turn the sprite
         * @param this TODO
         * @param direction left or right
         * @param degrees angle in degrees to turn, eg: 45, 90, 180, 135
         */
        //% weight=49 help=game/turn
        //% blockId=game_turn_sprite block="%sprite|turn %direction|by (°) %degrees"
        LedSprite.prototype.turn = function (direction, degrees) {
            if (direction == Direction.Right)
                this.setDirection(this._dir + degrees);
            else
                this.setDirection(this._dir - degrees);
        };
        /**
         * Turn to the right (clockwise)
         * @param this TODO
         * @param degrees TODO
         */
        LedSprite.prototype.turnRight = function (degrees) {
            this.turn(Direction.Right, degrees);
        };
        /**
         * Turn to the left (counter-clockwise)
         * @param this TODO
         * @param degrees TODO
         */
        LedSprite.prototype.turnLeft = function (degrees) {
            this.turn(Direction.Left, degrees);
        };
        /**
         * Sets a property of the sprite
         * @param property the name of the property to change
         * @param the updated value
         */
        //% weight=29 help=game/set
        //% blockId=game_sprite_set_property block="%sprite|set %property|to %value" blockGap=8
        LedSprite.prototype.set = function (property, value) {
            switch (property) {
                case LedSpriteProperty.X:
                    this.setX(value);
                    break;
                case LedSpriteProperty.Y:
                    this.setY(value);
                    break;
                case LedSpriteProperty.Direction:
                    this.setDirection(value);
                    break;
                case LedSpriteProperty.Brightness:
                    this.setBrightness(value);
                    break;
                case LedSpriteProperty.Blink:
                    this.setBlink(value);
                    break;
            }
        };
        /**
         * Changes a property of the sprite
         * @param property the name of the property to change
         * @param value amount of change, eg: 1
         */
        //% weight=30 help=game/change
        //% blockId=game_sprite_change_xy block="%sprite|change %property|by %value" blockGap=8
        LedSprite.prototype.change = function (property, value) {
            switch (property) {
                case LedSpriteProperty.X:
                    this.changeXBy(value);
                    break;
                case LedSpriteProperty.Y:
                    this.changeYBy(value);
                    break;
                case LedSpriteProperty.Direction:
                    this.changeDirectionBy(value);
                    break;
                case LedSpriteProperty.Brightness:
                    this.changeBrightnessBy(value);
                    break;
                case LedSpriteProperty.Blink:
                    this.changeBlinkBy(value);
                    break;
            }
        };
        /**
         * Gets a property of the sprite
         * @param property the name of the property to change
         */
        //% weight=28 help=game/get
        //% blockId=game_sprite_property block="%sprite|%property"
        LedSprite.prototype.get = function (property) {
            switch (property) {
                case LedSpriteProperty.X: return this.x();
                case LedSpriteProperty.Y: return this.y();
                case LedSpriteProperty.Direction: return this.direction();
                case LedSpriteProperty.Brightness: return this.brightness();
                case LedSpriteProperty.Blink: return this.blink();
                default: return 0;
            }
        };
        /**
         * Set the direction of the current sprite, rounded to the nearest multiple of 45
         * @param this TODO
         * @param degrees TODO
         */
        //% parts="ledmatrix"
        LedSprite.prototype.setDirection = function (degrees) {
            this._dir = (Math.floor(degrees / 45) % 8) * 45;
            if (this._dir <= -180) {
                this._dir = this._dir + 360;
            }
            else if (this._dir > 180) {
                this._dir = this._dir - 360;
            }
            plot();
        };
        /**
         * Reports the ``x`` position of a sprite on the LED screen
         * @param this TODO
         */
        LedSprite.prototype.x = function () {
            return this._x;
        };
        /**
         * Reports the ``y`` position of a sprite on the LED screen
         * @param this TODO
         */
        LedSprite.prototype.y = function () {
            return this._y;
        };
        /**
         * Reports the current direction of a sprite
         * @param this TODO
         */
        LedSprite.prototype.direction = function () {
            return this._dir;
        };
        /**
         * Set the ``x`` position of a sprite
         * @param this TODO
         * @param x TODO
         */
        LedSprite.prototype.setX = function (x) {
            this.goTo(x, this._y);
        };
        /**
         * Set the ``y`` position of a sprite
         * @param this TODO
         * @param y TODO
         */
        LedSprite.prototype.setY = function (y) {
            this.goTo(this._x, y);
        };
        /**
         * Changes the ``y`` position by the given amount
         * @param this TODO
         * @param y TODO
         */
        LedSprite.prototype.changeYBy = function (y) {
            this.goTo(this._x, this._y + y);
        };
        /**
         * Changes the ``x`` position by the given amount
         * @param this TODO
         * @param x TODO
         */
        LedSprite.prototype.changeXBy = function (x) {
            this.goTo(this._x + x, this._y);
        };
        /**
         * Reports true if sprite has the same position as specified sprite
         * @param this TODO
         * @param other TODO
         */
        //% weight=20 help=game/is-touching
        //% blockId=game_sprite_touching_sprite block="%sprite|touching %other|?" blockGap=8
        LedSprite.prototype.isTouching = function (other) {
            return this._enabled && other._enabled && this._x == other._x && this._y == other._y;
        };
        /**
         * Reports true if sprite is touching an edge
         * @param this TODO
         */
        //% weight=19 help=game/is-touching-edge
        //% blockId=game_sprite_touching_edge block="%sprite|touching edge?" blockGap=8
        LedSprite.prototype.isTouchingEdge = function () {
            return this._x == 0 || this._x == 4 || this._y == 0 || this._y == 4;
        };
        /**
         * Turns on the sprite (on by default)
         * @param this the sprite
         */
        LedSprite.prototype.on = function () {
            this.setBrightness(255);
        };
        /**
         * Turns off the sprite (on by default)
         * @param this the sprite
         */
        LedSprite.prototype.off = function () {
            this.setBrightness(0);
        };
        /**
         * Set the ``brightness`` of a sprite
         * @param this the sprite
         * @param brightness the brightness from 0 (off) to 255 (on), eg: 255.
         */
        //% parts="ledmatrix"
        LedSprite.prototype.setBrightness = function (brightness) {
            this._brightness = Math.clamp(0, 255, brightness);
            plot();
        };
        /**
         * Reports the ``brightness` of a sprite on the LED screen
         * @param this the sprite
         */
        //% parts="ledmatrix"
        LedSprite.prototype.brightness = function () {
            var r;
            return this._brightness;
        };
        /**
         * Changes the ``y`` position by the given amount
         * @param this the sprite
         * @param value the value to change brightness
         */
        LedSprite.prototype.changeBrightnessBy = function (value) {
            this.setBrightness(this._brightness + value);
        };
        /**
         * Changes the ``direction`` position by the given amount by turning right
         * @param this TODO
         * @param angle TODO
         */
        LedSprite.prototype.changeDirectionBy = function (angle) {
            this.turnRight(angle);
        };
        /**
         * Deletes the sprite from the game engine. The sprite will no longer appear on the screen or interact with other sprites.
         * @param this sprite to delete
         */
        //% weight=59 help=game/delete
        //% blockId="game_delete_sprite" block="delete %this(sprite)"
        LedSprite.prototype.delete = function () {
            this._enabled = false;
            if (_sprites.removeElement(this))
                plot();
        };
        /**
         * Sets the blink duration interval in millisecond.
         * @param sprite TODO
         * @param ms TODO
         */
        LedSprite.prototype.setBlink = function (ms) {
            this._blink = Math.clamp(0, 10000, ms);
        };
        /**
         * Changes the ``blink`` duration by the given amount of millisecons
         * @param this TODO
         * @param ms TODO
         */
        LedSprite.prototype.changeBlinkBy = function (ms) {
            this.setBlink(this._blink + ms);
        };
        /**
         * Reports the ``blink`` duration of a sprite
         * @param this TODO
         */
        LedSprite.prototype.blink = function () {
            return this._blink;
        };
        //% weight=-1
        //% parts="ledmatrix"
        LedSprite.prototype._plot = function (now) {
            var ps = this;
            if (ps._brightness > 0) {
                var r = 0;
                if (ps._blink > 0) {
                    r = Math.floor(now / ps._blink) % 2;
                }
                if (r == 0) {
                    _img.setPixelBrightness(ps._x, ps._y, _img.pixelBrightness(ps._x, ps._y) + ps._brightness);
                }
            }
        };
        return LedSprite;
    }());
    game.LedSprite = LedSprite;
    function init() {
        if (_img)
            return;
        var img = images.createImage("0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0");
        _sprites = [];
        basic.forever(function () {
            basic.pause(30);
            plot();
            if (game.isGameOver()) {
                basic.pause(600);
            }
        });
        _img = img;
    }
    /**
     * Plots the current sprites on the screen
     */
    //% parts="ledmatrix"
    function plot() {
        if (game.isGameOver() || game.isPaused() || !_img || _backgroundAnimation) {
            return;
        }
        // ensure greyscale mode
        var dm = led.displayMode();
        if (dm != 1 /* Greyscale */)
            led.setDisplayMode(1 /* Greyscale */);
        // render sprites
        var now = input.runningTime();
        _img.clear();
        for (var i = 0; i < _sprites.length; i++) {
            _sprites[i]._plot(now);
        }
        _img.plotImage(0);
    }
    /**
     * Gets an invalid sprite; used to initialize locals.
     */
    //% weight=0
    function invalidSprite() {
        return null;
    }
    game.invalidSprite = invalidSprite;
})(game || (game = {}));
