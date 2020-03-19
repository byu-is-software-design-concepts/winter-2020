class Singleton{
    public id: number;
    private data: number[] = [];
    private static instance: Singleton;
    private constructor(){
        this.id = Math.random()*10
    }
    public static getInstance(): Singleton {
        if (!Singleton.instance){
            Singleton.instance=new Singleton();
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
const singleton2 = Singleton.getInstance();

singleton.addData(5)
singleton2.addData(6)
singleton2.addData(2)
singleton2.addData(9)

console.log(singleton.getData());
// console.log(singleton2.id);

// console.log(singleton.id===singleton2.id)
