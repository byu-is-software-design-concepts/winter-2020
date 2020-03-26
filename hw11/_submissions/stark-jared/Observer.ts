class EStore {
    subscribers: Subscriber[] = []
    tpStock: number = 0
    addSubscriber = (subscriber: Subscriber) => {
        this.subscribers.push(subscriber)
    }
    notify = () => {
        this.subscribers.forEach(sub => sub.notify())
    }
    addTP = (newStock: number) => {
        this.tpStock += newStock
        this.notify()
    }
}


class Subscriber {
    name: string;
    email: string;
    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }
    notify = () => {
        console.log("email sent")
    }
}