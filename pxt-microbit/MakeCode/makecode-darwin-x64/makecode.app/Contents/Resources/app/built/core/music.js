var Note;
(function (Note) {
    //% blockIdentity=music.noteFrequency enumval=262
    Note[Note["C"] = 262] = "C";
    //% block=C#
    //% blockIdentity=music.noteFrequency enumval=277
    Note[Note["CSharp"] = 277] = "CSharp";
    //% blockIdentity=music.noteFrequency enumval=294
    Note[Note["D"] = 294] = "D";
    //% blockIdentity=music.noteFrequency enumval=311
    Note[Note["Eb"] = 311] = "Eb";
    //% blockIdentity=music.noteFrequency enumval=330
    Note[Note["E"] = 330] = "E";
    //% blockIdentity=music.noteFrequency enumval=349
    Note[Note["F"] = 349] = "F";
    //% block=F#
    //% blockIdentity=music.noteFrequency enumval=370
    Note[Note["FSharp"] = 370] = "FSharp";
    //% blockIdentity=music.noteFrequency enumval=392
    Note[Note["G"] = 392] = "G";
    //% block=G#
    //% blockIdentity=music.noteFrequency enumval=415
    Note[Note["GSharp"] = 415] = "GSharp";
    //% blockIdentity=music.noteFrequency enumval=440
    Note[Note["A"] = 440] = "A";
    //% blockIdentity=music.noteFrequency enumval=466
    Note[Note["Bb"] = 466] = "Bb";
    //% blockIdentity=music.noteFrequency enumval=494
    Note[Note["B"] = 494] = "B";
    //% blockIdentity=music.noteFrequency enumval=131
    Note[Note["C3"] = 131] = "C3";
    //% block=C#3
    //% blockIdentity=music.noteFrequency enumval=139
    Note[Note["CSharp3"] = 139] = "CSharp3";
    //% blockIdentity=music.noteFrequency enumval=147
    Note[Note["D3"] = 147] = "D3";
    //% blockIdentity=music.noteFrequency enumval=156
    Note[Note["Eb3"] = 156] = "Eb3";
    //% blockIdentity=music.noteFrequency enumval=165
    Note[Note["E3"] = 165] = "E3";
    //% blockIdentity=music.noteFrequency enumval=175
    Note[Note["F3"] = 175] = "F3";
    //% block=F#3
    //% blockIdentity=music.noteFrequency enumval=185
    Note[Note["FSharp3"] = 185] = "FSharp3";
    //% blockIdentity=music.noteFrequency enumval=196
    Note[Note["G3"] = 196] = "G3";
    //% block=G#3
    //% blockIdentity=music.noteFrequency enumval=208
    Note[Note["GSharp3"] = 208] = "GSharp3";
    //% blockIdentity=music.noteFrequency enumval=220
    Note[Note["A3"] = 220] = "A3";
    //% blockIdentity=music.noteFrequency enumval=233
    Note[Note["Bb3"] = 233] = "Bb3";
    //% blockIdentity=music.noteFrequency enumval=247
    Note[Note["B3"] = 247] = "B3";
    //% blockIdentity=music.noteFrequency enumval=262
    Note[Note["C4"] = 262] = "C4";
    //% block=C#4
    //% blockIdentity=music.noteFrequency enumval=277
    Note[Note["CSharp4"] = 277] = "CSharp4";
    //% blockIdentity=music.noteFrequency enumval=294
    Note[Note["D4"] = 294] = "D4";
    //% blockIdentity=music.noteFrequency enumval=311
    Note[Note["Eb4"] = 311] = "Eb4";
    //% blockIdentity=music.noteFrequency enumval=330
    Note[Note["E4"] = 330] = "E4";
    //% blockIdentity=music.noteFrequency enumval=349
    Note[Note["F4"] = 349] = "F4";
    //% block=F#4
    //% blockIdentity=music.noteFrequency enumval=370
    Note[Note["FSharp4"] = 370] = "FSharp4";
    //% blockIdentity=music.noteFrequency enumval=392
    Note[Note["G4"] = 392] = "G4";
    //% block=G#4
    //% blockIdentity=music.noteFrequency enumval=415
    Note[Note["GSharp4"] = 415] = "GSharp4";
    //% blockIdentity=music.noteFrequency enumval=440
    Note[Note["A4"] = 440] = "A4";
    //% blockIdentity=music.noteFrequency enumval=466
    Note[Note["Bb4"] = 466] = "Bb4";
    //% blockIdentity=music.noteFrequency enumval=494
    Note[Note["B4"] = 494] = "B4";
    //% blockIdentity=music.noteFrequency enumval=523
    Note[Note["C5"] = 523] = "C5";
    //% block=C#5
    //% blockIdentity=music.noteFrequency enumval=555
    Note[Note["CSharp5"] = 555] = "CSharp5";
    //% blockIdentity=music.noteFrequency enumval=587
    Note[Note["D5"] = 587] = "D5";
    //% blockIdentity=music.noteFrequency enumval=622
    Note[Note["Eb5"] = 622] = "Eb5";
    //% blockIdentity=music.noteFrequency enumval=659
    Note[Note["E5"] = 659] = "E5";
    //% blockIdentity=music.noteFrequency enumval=698
    Note[Note["F5"] = 698] = "F5";
    //% block=F#5
    //% blockIdentity=music.noteFrequency enumval=740
    Note[Note["FSharp5"] = 740] = "FSharp5";
    //% blockIdentity=music.noteFrequency enumval=784
    Note[Note["G5"] = 784] = "G5";
    //% block=G#5
    //% blockIdentity=music.noteFrequency enumval=831
    Note[Note["GSharp5"] = 831] = "GSharp5";
    //% blockIdentity=music.noteFrequency enumval=880
    Note[Note["A5"] = 880] = "A5";
    //% blockIdentity=music.noteFrequency enumval=932
    Note[Note["Bb5"] = 932] = "Bb5";
    //% blockIdentity=music.noteFrequency enumval=988
    Note[Note["B5"] = 988] = "B5";
})(Note || (Note = {}));
var BeatFraction;
(function (BeatFraction) {
    //% block=1
    BeatFraction[BeatFraction["Whole"] = 1] = "Whole";
    //% block="1/2"
    BeatFraction[BeatFraction["Half"] = 2] = "Half";
    //% block="1/4"
    BeatFraction[BeatFraction["Quarter"] = 4] = "Quarter";
    //% block="1/8"
    BeatFraction[BeatFraction["Eighth"] = 8] = "Eighth";
    //% block="1/16"
    BeatFraction[BeatFraction["Sixteenth"] = 16] = "Sixteenth";
    //% block="2"
    BeatFraction[BeatFraction["Double"] = 32] = "Double";
    //% block="4",
    BeatFraction[BeatFraction["Breve"] = 64] = "Breve";
})(BeatFraction || (BeatFraction = {}));
var MelodyOptions;
(function (MelodyOptions) {
    //% block="once""
    MelodyOptions[MelodyOptions["Once"] = 1] = "Once";
    //% block="forever"
    MelodyOptions[MelodyOptions["Forever"] = 2] = "Forever";
    //% block="once in background"
    MelodyOptions[MelodyOptions["OnceInBackground"] = 4] = "OnceInBackground";
    //% block="forever in background"
    MelodyOptions[MelodyOptions["ForeverInBackground"] = 8] = "ForeverInBackground";
})(MelodyOptions || (MelodyOptions = {}));
var MusicEvent;
(function (MusicEvent) {
    //% block="melody note played"
    MusicEvent[MusicEvent["MelodyNotePlayed"] = 1] = "MelodyNotePlayed";
    //% block="melody started"
    MusicEvent[MusicEvent["MelodyStarted"] = 2] = "MelodyStarted";
    //% block="melody ended"
    MusicEvent[MusicEvent["MelodyEnded"] = 3] = "MelodyEnded";
    //% block="melody repeated"
    MusicEvent[MusicEvent["MelodyRepeated"] = 4] = "MelodyRepeated";
    //% block="background melody note played"
    MusicEvent[MusicEvent["BackgroundMelodyNotePlayed"] = 241] = "BackgroundMelodyNotePlayed";
    //% block="background melody started"
    MusicEvent[MusicEvent["BackgroundMelodyStarted"] = 242] = "BackgroundMelodyStarted";
    //% block="background melody ended"
    MusicEvent[MusicEvent["BackgroundMelodyEnded"] = 243] = "BackgroundMelodyEnded";
    //% block="background melody repeated"
    MusicEvent[MusicEvent["BackgroundMelodyRepeated"] = 244] = "BackgroundMelodyRepeated";
    //% block="background melody paused"
    MusicEvent[MusicEvent["BackgroundMelodyPaused"] = 245] = "BackgroundMelodyPaused";
    //% block="background melody resumed"
    MusicEvent[MusicEvent["BackgroundMelodyResumed"] = 246] = "BackgroundMelodyResumed";
})(MusicEvent || (MusicEvent = {}));
/**
 * Generation of music tones.
 */
//% color=#E63022 weight=106 icon="\uf025"
var music;
(function (music) {
    var beatsPerMinute = 120;
    var freqTable = [];
    var _playTone;
    var MICROBIT_MELODY_ID = 2000;
    /**
     * Plays a tone through pin ``P0`` for the given duration.
     * @param frequency pitch of the tone to play in Hertz (Hz), eg: Note.C
     * @param ms tone duration in milliseconds (ms)
     */
    //% help=music/play-tone weight=90
    //% blockId=device_play_note block="play|tone %note=device_note|for %duration=device_beat" blockGap=8
    //% parts="headphone"
    //% useEnumVal=1
    function playTone(frequency, ms) {
        if (_playTone)
            _playTone(frequency, ms);
        else
            pins.analogPitch(frequency, ms);
    }
    music.playTone = playTone;
    /**
     * Plays a tone through pin ``P0``.
     * @param frequency pitch of the tone to play in Hertz (Hz), eg: Note.C
     */
    //% help=music/ring-tone weight=80
    //% blockId=device_ring block="ring tone (Hz)|%note=device_note" blockGap=8
    //% parts="headphone"
    //% useEnumVal=1
    function ringTone(frequency) {
        playTone(frequency, 0);
    }
    music.ringTone = ringTone;
    /**
     * Rests (plays nothing) for a specified time through pin ``P0``.
     * @param ms rest duration in milliseconds (ms)
     */
    //% help=music/rest weight=79
    //% blockId=device_rest block="rest(ms)|%duration=device_beat"
    //% parts="headphone"
    function rest(ms) {
        playTone(0, ms);
    }
    music.rest = rest;
    /**
     * Gets the frequency of a note.
     * @param name the note name
     */
    //% weight=50 help=music/note-frequency
    //% blockId=device_note block="%name"
    //% shim=TD_ID color="#FFFFFF" colorSecondary="#FFFFFF"
    //% name.fieldEditor="note" name.defl="262"
    //% name.fieldOptions.decompileLiterals=true
    //% useEnumVal=1
    function noteFrequency(name) {
        return name;
    }
    music.noteFrequency = noteFrequency;
    function init() {
        if (beatsPerMinute <= 0)
            beatsPerMinute = 120;
        if (freqTable.length == 0)
            freqTable = [31, 33, 35, 37, 39, 41, 44, 46, 49, 52, 55, 58, 62, 65, 69, 73, 78, 82, 87, 92, 98, 104, 110, 117, 123, 131, 139, 147, 156, 165, 175, 185, 196, 208, 220, 233, 247, 262, 277, 294, 311, 330, 349, 370, 392, 415, 440, 466, 494, 523, 554, 587, 622, 659, 698, 740, 784, 831, 880, 932, 988, 1047, 1109, 1175, 1245, 1319, 1397, 1480, 1568, 1661, 1760, 1865, 1976, 2093, 2217, 2349, 2489, 2637, 2794, 2960, 3136, 3322, 3520, 3729, 3951, 4186];
    }
    /**
     * Returns the duration of a beat in milli-seconds
     */
    //% help=music/beat weight=49
    //% blockId=device_beat block="%fraction|beat"
    function beat(fraction) {
        init();
        if (fraction == null)
            fraction = BeatFraction.Whole;
        var beat = 60000 / beatsPerMinute;
        switch (fraction) {
            case BeatFraction.Half: return beat / 2;
            case BeatFraction.Quarter: return beat / 4;
            case BeatFraction.Eighth: return beat / 8;
            case BeatFraction.Sixteenth: return beat / 16;
            case BeatFraction.Double: return beat * 2;
            case BeatFraction.Breve: return beat * 4;
            default: return beat;
        }
    }
    music.beat = beat;
    /**
     * Returns the tempo in beats per minute. Tempo is the speed (bpm = beats per minute) at which notes play. The larger the tempo value, the faster the notes will play.
     */
    //% help=music/tempo weight=40
    //% blockId=device_tempo block="tempo (bpm)" blockGap=8
    function tempo() {
        init();
        return beatsPerMinute;
    }
    music.tempo = tempo;
    /**
     * Change the tempo by the specified amount
     * @param bpm The change in beats per minute to the tempo, eg: 20
     */
    //% help=music/change-tempo-by weight=39
    //% blockId=device_change_tempo block="change tempo by (bpm)|%value" blockGap=8
    function changeTempoBy(bpm) {
        init();
        setTempo(beatsPerMinute + bpm);
    }
    music.changeTempoBy = changeTempoBy;
    /**
     * Sets the tempo to the specified amount
     * @param bpm The new tempo in beats per minute, eg: 120
     */
    //% help=music/set-tempo weight=38
    //% blockId=device_set_tempo block="set tempo to (bpm)|%value"
    //% bpm.min=4 bpm.max=400
    function setTempo(bpm) {
        init();
        if (bpm > 0) {
            beatsPerMinute = Math.max(1, bpm);
        }
    }
    music.setTempo = setTempo;
    var currentMelody;
    var currentBackgroundMelody;
    /**
     * Gets the melody array of a built-in melody.
     * @param name the note name, eg: Note.C
     */
    //% weight=50 help=music/builtin-melody
    //% blockId=device_builtin_melody block="%melody"
    //% blockHidden=true
    function builtInMelody(melody) {
        return music.getMelody(melody);
    }
    music.builtInMelody = builtInMelody;
    /**
     * Registers code to run on various melody events
     */
    //% blockId=melody_on_event block="music on %value"
    //% help=music/on-event weight=59 blockGap=32
    function onEvent(value, handler) {
        control.onEvent(MICROBIT_MELODY_ID, value, handler);
    }
    music.onEvent = onEvent;
    /**
     * Starts playing a melody.
     * Notes are expressed as a string of characters with this format: NOTE[octave][:duration]
     * @param melodyArray the melody array to play
     * @param options melody options, once / forever, in the foreground / background
     */
    //% help=music/begin-melody weight=60 blockGap=16
    //% blockId=device_start_melody block="start melody %melody=device_builtin_melody| repeating %options"
    //% parts="headphone"
    function beginMelody(melodyArray, options) {
        if (options === void 0) { options = 1; }
        init();
        if (currentMelody != undefined) {
            if (((options & MelodyOptions.OnceInBackground) == 0)
                && ((options & MelodyOptions.ForeverInBackground) == 0)
                && currentMelody.background) {
                currentBackgroundMelody = currentMelody;
                currentMelody = null;
                control.raiseEvent(MICROBIT_MELODY_ID, MusicEvent.BackgroundMelodyPaused);
            }
            if (currentMelody)
                control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent.BackgroundMelodyEnded : MusicEvent.MelodyEnded);
            currentMelody = new Melody(melodyArray, options);
            control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent.BackgroundMelodyStarted : MusicEvent.MelodyStarted);
        }
        else {
            currentMelody = new Melody(melodyArray, options);
            control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent.BackgroundMelodyStarted : MusicEvent.MelodyStarted);
            // Only start the fiber once
            control.inBackground(function () {
                while (currentMelody.hasNextNote()) {
                    playNextNote(currentMelody);
                    if (!currentMelody.hasNextNote() && currentBackgroundMelody) {
                        // Swap the background melody back
                        currentMelody = currentBackgroundMelody;
                        currentBackgroundMelody = null;
                        control.raiseEvent(MICROBIT_MELODY_ID, MusicEvent.MelodyEnded);
                        control.raiseEvent(MICROBIT_MELODY_ID, MusicEvent.BackgroundMelodyResumed);
                    }
                }
                control.raiseEvent(MICROBIT_MELODY_ID, currentMelody.background ? MusicEvent.BackgroundMelodyEnded : MusicEvent.MelodyEnded);
                currentMelody = null;
            });
        }
    }
    music.beginMelody = beginMelody;
    /**
     * Sets a custom playTone function for playing melodies
     */
    //% help=music/set-play-tone
    //% advanced=true
    function setPlayTone(f) {
        _playTone = f;
    }
    music.setPlayTone = setPlayTone;
    function playNextNote(melody) {
        // cache elements
        var currNote = melody.nextNote();
        var currentPos = melody.currentPos;
        var currentDuration = melody.currentDuration;
        var currentOctave = melody.currentOctave;
        var note;
        var isrest = false;
        var beatPos;
        var parsingOctave = true;
        for (var pos = 0; pos < currNote.length; pos++) {
            var noteChar = currNote.charAt(pos);
            switch (noteChar) {
                case 'c':
                case 'C':
                    note = 1;
                    break;
                case 'd':
                case 'D':
                    note = 3;
                    break;
                case 'e':
                case 'E':
                    note = 5;
                    break;
                case 'f':
                case 'F':
                    note = 6;
                    break;
                case 'g':
                case 'G':
                    note = 8;
                    break;
                case 'a':
                case 'A':
                    note = 10;
                    break;
                case 'b':
                case 'B':
                    note = 12;
                    break;
                case 'r':
                case 'R':
                    isrest = true;
                    break;
                case '#':
                    note++;
                    break;
                case 'b':
                    note--;
                    break;
                case ':':
                    parsingOctave = false;
                    beatPos = pos;
                    break;
                default: if (parsingOctave)
                    currentOctave = parseInt(noteChar);
            }
        }
        if (!parsingOctave) {
            currentDuration = parseInt(currNote.substr(beatPos + 1, currNote.length - beatPos));
        }
        var beat = (60000 / beatsPerMinute) / 4;
        if (isrest) {
            music.rest(currentDuration * beat);
        }
        else {
            var keyNumber = note + (12 * (currentOctave - 1));
            var frequency = keyNumber >= 0 && keyNumber < freqTable.length ? freqTable[keyNumber] : 0;
            music.playTone(frequency, currentDuration * beat);
        }
        melody.currentDuration = currentDuration;
        melody.currentOctave = currentOctave;
        var repeating = melody.repeating && currentPos == melody.melodyArray.length - 1;
        melody.currentPos = repeating ? 0 : currentPos + 1;
        control.raiseEvent(MICROBIT_MELODY_ID, melody.background ? MusicEvent.BackgroundMelodyNotePlayed : MusicEvent.MelodyNotePlayed);
        if (repeating)
            control.raiseEvent(MICROBIT_MELODY_ID, melody.background ? MusicEvent.BackgroundMelodyRepeated : MusicEvent.MelodyRepeated);
    }
    var Melody = /** @class */ (function () {
        function Melody(melodyArray, options) {
            this.melodyArray = melodyArray;
            this.repeating = ((options & MelodyOptions.Forever) != 0);
            this.repeating = this.repeating ? true : ((options & MelodyOptions.ForeverInBackground) != 0);
            this.background = ((options & MelodyOptions.OnceInBackground) != 0);
            this.background = this.background ? true : ((options & MelodyOptions.ForeverInBackground) != 0);
            this.currentDuration = 4; //Default duration (Crotchet)
            this.currentOctave = 4; //Middle octave
            this.currentPos = 0;
        }
        Melody.prototype.hasNextNote = function () {
            return this.repeating || this.currentPos < this.melodyArray.length;
        };
        Melody.prototype.nextNote = function () {
            var currentNote = this.melodyArray[this.currentPos];
            return currentNote;
        };
        return Melody;
    }());
})(music || (music = {}));
