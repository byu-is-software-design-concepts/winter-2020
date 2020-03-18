class Singleton {
    public id: number;
    private data: number[] = [];
    private static instance: Singleton; //apparently you can now do private variables in js with #
    private constructor() {
        this.id = Math.random();
    }

    public static getInstance(): Singleton {
        if(!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public addData(num: number) {
        this.data.push(num);
    }

    public getData() {
        return this.data;
    }
}

const singleton = Singleton.getInstance(); //we can't just do = new Singleton() 
const singletonJr = Singleton.getInstance();

singleton.addData(1);
singleton.addData(2);
singleton.addData(4);

singletonJr.addData(3);
singletonJr.addData(5);

console.log(singletonJr.getData()); //will have all data from both variables--1, 2, 3, 4, 5

console.log(singleton.id);
console.log(singletonJr.id);

console.log(singleton === singletonJr); //should return true
console.log({} === {}); //should return false