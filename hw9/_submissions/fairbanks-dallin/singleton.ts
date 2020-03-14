class Singleton {
    public id: number;
    public data: number[] = [];
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
        this.data.push()
    }
}

const singleton = Singleton.getInstance();
const singletonJr = Singleton.getInstance();

singleton.addData(1);
singleton.addData(2);
singleton.addData(4);

singletonJr.addData(3);
singletonJr.addData(5);

console.log(singleton.id);
console.log(singletonJr.id);

console.log(singleton === singletonJr)
console.log({} === {})