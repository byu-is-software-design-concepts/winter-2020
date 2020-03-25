class Observer {
    constructor() {
      this.observers = [];
    }

    subscribe(item) {
      this.observers.push(item);
    }
  
    unsubscribe(item) {
      this.observers = this.observers.filter(subscriber => subscriber !== item);
    }
  
    notify(data) {
      this.observers.forEach(observer => observer(data));
    }
  }