interface Subject {
    registerObserver(o: Observer)
    removeObserver(o: Observer)
    notifyObservers()
}

interface Observer {
    update(score: number)
}

class ESPN implements Subject {
    private score: number
    private observers: Observer[] = []

    setScore(score: number) {
        console.log('The Jazz current score is ' + score)
        this.score = score
        this.notifyObservers()
    }

    registerObserver(o: Observer) {
        this.observers.push(o)
    }

    removeObserver(o: Observer) {
        let index = this.observers.indexOf(o)
        this.observers.splice(index, 1)
    }

    notifyObservers() {
        for(let observers of this.observers) {
            observers.update(this.score)
        }
    }
}

class WatchDisplay implements Observer {
    private subject: Subject

    constructor(espn: Subject) {
        this.subject = espn
        espn.registerObserver(this)
    }
    public update(score: number) {
        console.log('watchDisplay: Here is the new score ' + score)
    }

}

class Alert implements Observer {
    private subject: Subject

    constructor(espn: Subject) {
        this.subject = espn
        espn.registerObserver(this)
    }
    public update(score: number) {
        if(score === 0) {
            console.log('The game is about to begin')
        }
        else {
            console.log('The game is still going')
        }
    }

}

let espn = new ESPN()

let tempDisplay = new WatchDisplay(espn)
let fan = new Alert(espn)

espn.setScore(0)
espn.setScore(50)