interface Subscriber {
    id: number
    name: string
    update(): void
}

class Publisher {
    name: string
    subscribers: Array<Subscriber>
    constructor (n: string) {
        this.name = n
        this.subscribers = []
    }
    // iterator pattern here
    findSubscriber (id: number) {
        for (let i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i].id == id) {
                return i
            }
        }

        return -1
    }

    subscribe (s: Subscriber) {
        this.subscribers.push(s)
        console.log(`${this.name} subscribed ${s.name}`)
    }
    
    unsubscribe(s: Subscriber) {
        let subscriberIndex: number = this.findSubscriber(s.id)

        if (subscriberIndex === -1) {
            console.log("Subscriber not found")
        } else {
            let removedSubscriber = this.subscribers.splice(subscriberIndex, 1)
            console.log(`Removed ${removedSubscriber[0].name}`)
        }

    }

    notifySubscribers() {
        console.log("Notifying subscribers")
        for (let subscriber of this.subscribers) {
            subscriber.update()
        }
    }
}

class concernedShopper implements Subscriber {

    id: number
    name: string
    tpAmount: number

    constructor(n: string) {
        this.name = n
        this.id = Math.floor(Math.random() * 10)
        this.tpAmount = 0;
    }

    update() {
        this.tpAmount += 1
    }
}

let jim = new concernedShopper("Jim")
console.log(`Jim's tp amound ${jim.tpAmount}\n`)

let sarah = new concernedShopper("Sarah")
console.log(`Sarah's tp amound ${sarah.tpAmount}\n`)

let franklin = new concernedShopper("Franklin")
console.log(`Franklin's tp amound ${franklin.tpAmount}\n`)

let costco = new Publisher("Costco")
costco.subscribe(jim)
costco.subscribe(sarah)
costco.subscribe(franklin)

costco.notifySubscribers()

console.log(`Jim's tp amound ${jim.tpAmount}`)
console.log(`Sarah's tp amound ${sarah.tpAmount}`)
console.log(`Franklin's tp amound ${franklin.tpAmount}`)

