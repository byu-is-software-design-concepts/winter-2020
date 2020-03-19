// One instance of a single class, ever.
// Provide a global access point to that instance. Global variable.
// Don't create it until you need it the first time.
// Create a class that has an attribute of itself. When you want that instance, call the getInstance method.

class Singleton{
    public id: number;
    private data: number[] = [];
    private static instance: Singleton;
    private constructor(){
        this.id = Math.random()
    }
    public static getInstance(): Singleton {
        if(Singleton.instance){
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    public addData(num: number){
        this.data.push(num);
    }

    public getData(){
        return this.data;
    }

}

const singleton = Singleton.getInstance();
const singletonjr = Singleton.getInstance();

console.log(singleton.id)
console.log(singletonjr.id)