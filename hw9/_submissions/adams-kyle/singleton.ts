//good pattern if you only need it once

class Singleton {
    public id: number;
    private data: number[] = [];

    private static instance: Singleton;
    public constructor() {
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
    
    public getData(num:number) {
        this.data;
    }


}

const singleton = Singleton.getInstance();
//const singletonJr = Singleton.getInstance();
const singletonJr = new Singleton();

singleton.addData(1);
singleton.addData(2);
singleton.addData(3);

singletonJr.addData(4);
singletonJr.addData(5);

console.log(singletonJr.getData(4));


console.log(singleton.id);
console.log(singletonJr.id);

console.log(singleton === singletonJr);