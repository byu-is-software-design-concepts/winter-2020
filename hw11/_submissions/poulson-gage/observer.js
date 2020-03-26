class store {
    constructor(){
        this.observers = []
    }
    
    isSubscribed(sub){
        return this.observers.filter(subscriber => subscriber === sub).length
    }

    subscribe(sub) {
        if (this.isSubscribed(sub)) return
        this.observers.push(f)
    }

    unsubscribe(sub) {
        this.observers = this.observers.filter(subscriber => subscriber !== sub)
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class observer {
    constructor(store, { userId }) {
        this._bindEvents(store)
    }
}