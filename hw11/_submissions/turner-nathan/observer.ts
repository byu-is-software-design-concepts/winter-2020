interface Subscriber {
    name;
    update();
}

class Person implements Subscriber {
    public name: string;
    public email: string;

    constructor(name, email) {
        this.name = name
        this.email = email
    }

    update() {
        // Logic for sending email.
        console.log(`Email sent to ${this.name} at ${this.email} informing them that toilet paper has been stocked`)
    }
}

class Store {
    public subscribers: Subscriber[] = [];

    subscribe(subscriber: Subscriber) {
        if (this.subscribers.filter(s => s.name === subscriber.name).length > 0) {
            console.log('Already subscribed')
        } else {
            this.subscribers.push(subscriber);
            console.log('Subscribed')
        }   
    }

    unsubscribe(subscriber: Subscriber) {
        if (this.subscribers.filter(s => s.name === subscriber.name).length > 0) {
            this.subscribers.splice(this.subscribers.indexOf(subscriber), 1)
            console.log('Unsubscribed')
        } else {
            console.log('Subscriber not found')
        }
    }

    notifyObservers() {
        for(let subscriber of this.subscribers) {
            // Could potentially add a message parameter to update to let custom messages be possible.
            subscriber.update()
        }
    }
}

const store = new Store()
const person1 = new Person('Bobby', 'bobby@email.email')
const samePerson = new Person('Bobby', 'bobby@email.email')
const person2 = new Person('Eleanor', 'roosevelt@email.email')
const person3 = new Person('Bobbina', 'bobby@email.email')

store.subscribe(person1)
store.subscribe(samePerson)
store.subscribe(person2)
store.subscribe(person3)

store.unsubscribe(person2)

store.notifyObservers()
