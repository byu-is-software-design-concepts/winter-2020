class Singleton {
    public id: number;
    private data: number[] = [];

    private static instance: Singleton;
    public constructor () {
        this.id = Math.random();
    }
    public static getInstance(): Singleton {
        if (!Singleton.instance){
            Singleton.instance = new Singleton;
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
const singletonJr = new Singleton();