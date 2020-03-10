// Ensures that a class has a single instance
// Provides a global access point

class Singleton {
    public id: number;
    private data: number[] = [];
    private static instance: Singleton;
    private constructor() {
        this.id = Math.random()
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    public addData(num: number){
        this.data.push(num)
    }
    public getData(){
        return this.data;
    }
}

const singleton = Singleton.getInstance();
const singletonJr = Singleton.getInstance();

console.log(singleton.id)
console.log(singletonJr.id);

singleton.addData(123)

console.log(singletonJr.getData())