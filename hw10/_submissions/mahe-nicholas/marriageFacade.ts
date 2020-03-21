class Tinder {
    exist() {
        console.log('The world welcomes Tinder')
    }
}

class Boy {
    useTinder() {
        console.log('Boy uses Tinder...')
    }
    swipesRight() {
        console.log('Boy swipes right...')
    }
    asksForDate() {
        console.log('Boy asks for a date...')
    }
    listen() {
        console.log('Boy listens...')
    }
    asksToMarry() {
        console.log('Boy asks to marry...')
    }
    dance() {
        console.log('Boy dances...')
    }
    becomeFather() {
        console.log('Boy becomes father...')
    }
    stayAwake() {
        console.log('Boy cannot sleep')
    }
}

class Girl {
    useTinder() {
        console.log('Girl uses Tinder')
    }
    swipesRight() {
        console.log('Girl swipes right...')
    }
    deny() {
        console.log('Girl rejects...')
    }
    accept() {
        console.log('Girl accepts...')
    }
    talk() {
        console.log('Girl talks...')
    }
    dance() {
        console.log('Girl dances...')
    }
    pregnant() {
        console.log('Girl is pregnant...')
    }
    becomesMother() {
        console.log('Girl becomes mother...')
    }
    stayAwake() {
        console.log('Girl cannot sleep')
    }
}

class Baby {
    cry() {
        console.log('Baby cries...')
    }
    poop() {
        console.log('Baby poops...')
    }
}

class MarriageFacade {
    private boy: Boy
    private girl: Girl
    private baby: Baby

    constructor(boy: Boy, girl: Girl, baby: Baby){
        this.boy = boy
        this.girl = girl
        this.baby = baby
    }
    public matchmaking() {
        this.boy.useTinder()
        this.girl.useTinder()
        this.boy.swipesRight()
        this.girl.swipesRight()
        this.boy.asksForDate()
        this.girl.deny()
        this.boy.asksForDate()
        this.girl.deny()
        this.boy.asksForDate()
        this.girl.accept()
        this.girl.talk()
        this.boy.listen()
        this.girl.talk()
        this.boy.listen()
        this.boy.listen()
        this.boy.asksToMarry()
        this.girl.deny()
        this.boy.asksToMarry()
        this.girl.accept()
        
        
    }
    public newlyWedding() {
        this.boy.dance()
        this.girl.dance()
        this.girl.pregnant()
    }
    public familying() {
        this.baby.cry()
        this.girl.becomesMother()
        this.boy.becomeFather()
        this.baby.cry()
        this.baby.poop()
        this.boy.stayAwake()
        this.girl.stayAwake()
    }
}

let boy = new Boy()
let girl = new Girl()
let baby = new Baby()
let marriage = new MarriageFacade(boy, girl, baby)
marriage.matchmaking()
marriage.newlyWedding()
marriage.familying()
