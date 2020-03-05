class Singleton {
    private static instance: Singleton;
    public id: number;
    private data: number[] = [];

    private constructor() {
        this.id = Math.random();
    }
    
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public addData(num:number) {
        this.data.push(num);
    }

    public getData() {
        return this.data;
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

// Should be TRUE. The singleton is the SAME instance.
console.log(singleton === singletonJr);
// Will be FALSE
console.log({} === {});
