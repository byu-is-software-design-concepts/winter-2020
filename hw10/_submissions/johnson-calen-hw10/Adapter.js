
function Decorater()
{
    // A standard object is created called player
    let player = function(name, team)
    {
        this.name = name;
        this.team = team;
        this.output = function(){console.log("Player" + this.name)}
    }

    // The player object is decorated which extends player with additional properties, in this case the ability to choose a coin toss
    let teamCaptain = function(player, coinToss)
    {
        let kickFirst;
        this.player = player;
        if(coinToss == true)
        {
            kickFirst = true;
        }
        else
        {
            kickFirst = false
        }
        this.kickFirst = kickFirst;
    }
}
