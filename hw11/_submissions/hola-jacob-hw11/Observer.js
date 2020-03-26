class GobletOfFire {
    constructor(){
        this.students =[]
    }

    subscribe(name){
        this.students.push(name)
    }

    annouceMessage(message){
        this.students.forEach((student) => this.students(message))
    }

    unsubscribe(name){
        this.students = this.students.filter((student)=> student !== name)
    }
}