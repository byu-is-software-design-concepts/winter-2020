var BurpCommand = /** @class */ (function () {
    function BurpCommand(speaker) {
        this.speaker = speaker;
    }
    BurpCommand.prototype.execute = function () {
        this.speaker.burp();
    };
    return BurpCommand;
}());
var ViolinCommand = /** @class */ (function () {
    function ViolinCommand(speaker) {
        this.speaker = speaker;
    }
    ViolinCommand.prototype.execute = function () {
        this.speaker.violin();
    };
    return ViolinCommand;
}());
var CryingChildCommand = /** @class */ (function () {
    function CryingChildCommand(speaker) {
        this.speaker = speaker;
    }
    CryingChildCommand.prototype.execute = function () {
        this.speaker.cryingBaby();
    };
    return CryingChildCommand;
}());
var SoundButton = /** @class */ (function () {
    function SoundButton() {
    }
    SoundButton.prototype.setCommand = function (command) {
        this.command = command;
    };
    SoundButton.prototype.onButtonPressed = function () {
        this.command.execute();
    };
    return SoundButton;
}());
var SoundBoard = /** @class */ (function () {
    function SoundBoard(activeSpeaker) {
        this.speaker = activeSpeaker;
        this.burpButton = new SoundButton;
        this.violinButton = new SoundButton;
        this.cryButton = new SoundButton;
        this.burpButton.setCommand(new BurpCommand(this.speaker));
        this.violinButton.setCommand(new ViolinCommand(this.speaker));
        this.cryButton.setCommand(new CryingChildCommand(this.speaker));
    }
    return SoundBoard;
}());
var Speaker = /** @class */ (function () {
    function Speaker() {
    }
    Speaker.prototype.burp = function () {
        console.log("BURP");
    };
    Speaker.prototype.violin = function () {
        console.log("*Violin noises*");
    };
    Speaker.prototype.cryingBaby = function () {
        console.log("WAAAAHHH");
    };
    return Speaker;
}());
var mySpeaker = new Speaker();
var thisBoard = new SoundBoard(mySpeaker);
thisBoard.burpButton.onButtonPressed();
thisBoard.violinButton.onButtonPressed();
thisBoard.cryButton.onButtonPressed();
//# sourceMappingURL=command.js.map