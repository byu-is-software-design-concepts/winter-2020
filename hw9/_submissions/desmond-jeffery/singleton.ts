class Singleton {
    public id: number;
    public data: number[] = [];

    private static instance: Singleton;
    private constructor() {
        this.id = Math.random();
    };

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
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

const singleton = Singleton.getInstance();
const singletonJr = Singleton.getInstance();

singleton.addData(1);
singleton.addData(2);


console.log(singleton.id)
console.log(singletonJr.id)
