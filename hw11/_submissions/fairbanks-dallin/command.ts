interface Command {
    execute(): void;
}

class BurpCommand implements Command
{
    private speaker: Speaker;

    constructor(speaker: Speaker) 
    {
        this.speaker = speaker
    }

    public execute(): void
    {
        this.speaker.burp()
    }
}

class ViolinCommand implements Command
{
    private speaker: Speaker;

    constructor(speaker: Speaker) 
    {
        this.speaker = speaker
    }

    public execute(): void
    {
        this.speaker.violin()
    }
}

class CryingChildCommand implements Command
{
    private speaker: Speaker;

    constructor(speaker: Speaker) 
    {
        this.speaker = speaker
    }

    public execute(): void
    {
        this.speaker.cryingBaby()
    }
}

class SoundButton 
{
    public command: Command;

    public setCommand(command: Command): void
    {
        this.command = command;
    }

    public onButtonPressed(): void
    {
        this.command.execute();
    }
}

class SoundBoard
{
    private speaker: Speaker;
    public burpButton: SoundButton;
    public violinButton: SoundButton;
    public cryButton: SoundButton;


    constructor(activeSpeaker: Speaker) 
    {
        this.speaker = activeSpeaker;
        this.burpButton = new SoundButton;
        this.violinButton = new SoundButton;
        this.cryButton = new SoundButton;

        this.burpButton.setCommand(new BurpCommand(this.speaker));
        this.violinButton.setCommand(new ViolinCommand(this.speaker));
        this.cryButton.setCommand(new CryingChildCommand(this.speaker));
    }
}

class Speaker
{
    public burp(): void
    {
        console.log("BURP");
    }
    public violin(): void
    {
        console.log("*Violin noises*");
    }
    public cryingBaby(): void
    {
        console.log("WAAAAHHH");
    }

}

const mySpeaker = new Speaker();
const thisBoard = new SoundBoard(mySpeaker);

thisBoard.burpButton.onButtonPressed();
thisBoard.violinButton.onButtonPressed();
thisBoard.cryButton.onButtonPressed();
