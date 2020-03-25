// Behavioral Design Patterns

// Mediator

class Student{
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    send(message, to){
        this.chatroom.send(message, this, to);
    }

    receive(message, from) {
        log.add(from.name + " to " + this.name + ": " + message);
    }
}
// Messenger facilitates communication between students
let Messenger = function() {
    let students = {};

    return{
        register: function(student){
            students[student.name] = student;
            student.chatroom = this;
        },

        send: function(message, from, to){
            if(to){
                to.recieve(message,from);

            } else {
                for (let key in students){
                    if( students[key] !== from){
                        students[key].receive(message, from)
                    }
                }
            }
        }

    }
}

// Observer
// Could be used to track events for specific elemnts on a webpa.
class EventObserver {
    constructor() {
        this.observers = [];
    }
}

subscribe(fn)
{
    this.observers.push(fn);
}

unsubscribe(fn)
{
    this.observers = this.observers.filter((subscriber) => subscriber !== fun);

}

broadcast(data){
    this.observers.forEach((subscriber) => subscriber(data));
}

const observer = new EventObserver();
const fn = () => {};

observer.subscribe(fn);
asserts.strictEqual(observer.observers.length, 1);