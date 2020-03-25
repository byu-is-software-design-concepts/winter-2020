//This is a little random for an example, but this goes through and validates that the user
// is named steve, is 21 or over, and has a waiver signed in the database before it can book timeslot

class Person {
    private Name: string;
    private Age: Number;
    private hasWaiver: boolean;

    constructor(name, age, waiver) {
        this.Name = name;
        this.Age = age;
        this.hasWaiver = waiver;
    }

    public bookEvent(info: string) {
        if (this.CheckAge(this)) {
            console.log("you are not old enough to book an event")
            return false
        }
        if (this.CheckName(this)) {
            console.log("only people named steve can book an event")
            return false;
        }
        if (this.CheckWaiver(this)) {
            console.log("you do not have a valid waiver signed")
            return false;
        }

        return this.BookEvent(info);
    }

    private CheckAge(person: Person) {
        if (person.Age >= 21) {
            return true;
        }

        return false;
    }

    private CheckName(person: Person) {
        if (person.Name.toLowerCase() === "steve") {
            return true;
        }

        return false;
    }

    private CheckWaiver(person: Person) {
        return person.hasWaiver;
    }

    private BookEvent(info: string) {
        console.log(`Your event has been booked: ${info}`);
        return true;
    }
}

//This one should not pass
let person = new Person("steve", 20, false);
person.bookEvent("I want to book an event on December 12th, 1970")

//This one should pass and an event should be created
let validPerson = new Person("steve", 21, true);
validPerson.bookEvent("I want to book an event on July 4th, 2020")
