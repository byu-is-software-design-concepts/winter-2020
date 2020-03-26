const EVENT_TYPES = {
    "toiletPaperInStock":"toiletPaperInStock"
}

interface NotificationListener {
    id: number
    notify(eventType:string): void
}

class Person implements NotificationListener{
    id: number
    firstName: string
    lastName: string

    notify(eventType:string) {
        if (eventType === EVENT_TYPES.toiletPaperInStock) {
            console.log(`Hey ${this.firstName} ${this.lastName}! The Toilet Paper is back in stock!!`)
        }
    }
}

class Store {
    publisher: NotificationPublisher
}

class NotificationPublisher {
    subscribersByEventType: Record<string, [NotificationListener]>

    subscribe(eventType: string, listener: NotificationListener) {
        if (!this.subscribersByEventType[eventType].some((nListener) => {nListener.id == listener.id} )) {
            this.subscribersByEventType[eventType].push(listener);
        }
    }

    unsubscribe(eventType: string, listener: NotificationListener) {
        let index = this.subscribersByEventType[eventType].findIndex((nListener) => {nListener.id == listener.id});
        if (index !== -1) {
            this.subscribersByEventType[eventType].splice(index, 1);
        }
    }

    notifySubscribers(eventType: string) {
        let subList = this.subscribersByEventType[eventType]
        subList.forEach((sub) => {
            sub.notify(eventType);
        });
    }
}

