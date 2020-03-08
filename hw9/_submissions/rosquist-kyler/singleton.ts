class Singleton {
    
    private static instance: Singleton;
    private data: number[];
    private id: number;

    private constructor() {
        this.id = Math.random();
        this.data = [];
    }
    
    public static getInstance(): Singleton {
        
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public addData(num: number) : void {
        this.data.push(num);
    }

    public getData():number[] {
        return this.data;
    }

    public isEqual(sing2: Singleton): boolean {
        let isEqual = Singleton.instance.id === sing2.id && Singleton.instance.data.length === sing2.data.length;
        if (isEqual) {
            for (let i=0; i < sing2.data.length; i++) {
                if (Singleton.instance.data[i] !== sing2.data[i]) return false;
            }
        }

        return isEqual;
        
    }
}

const singleton = Singleton.getInstance();
singleton.addData(4);
singleton.addData(3);
singleton.addData(8);
singleton.addData(1);
singleton.addData(5);

const singleton2 = Singleton.getInstance();

console.log('singleton1 is equivalent to singleton2', singleton.isEqual(singleton2));
let d = [0,0];
let c = [1,3];
console.log(d === c)

let a = [1,4,7];
let b = [1,4,7];
console.log(a === b)