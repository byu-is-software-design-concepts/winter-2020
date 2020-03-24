class Singleton {
    public id: number;
    private static instance: Singleton;
    private constructor() {
        this.id = Math.random()
    }
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton() // reference to static part of singleton class = call constructor
        }
        return Singleton.instance;
    }
}

const singleton = Singleton.getInstance();
const singletonJr = Singleton.getInstance();

console.log(singleton.id)
console.log(singletonJr.id) // use ts-node

console.log(singleton === singletonJr)

console.log({} === {})  