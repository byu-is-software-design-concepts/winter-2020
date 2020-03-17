class Singleton{
    public id: number;
    private data: number[] = [];
    private static instance: Singleton;
    private constructor() {
        this.id = Math.random()
    }
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton()
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

const connor = Singleton.getInstance();
const connorjr = Singleton.getInstance();

connor.addData(1);
connor.addData(2);
connor.addData(4);

connorjr.addData(3);
connorjr.addData(5);

console.log(connorjr.getData());

// console.log(singleton.id);
// console.log(singletonJr.id);

// console.log(singleton === singletonJr);
// console.log({} === {});