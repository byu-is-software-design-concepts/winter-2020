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
        console.log('Singleton.instance.id === sing2.id', Singleton.instance.id === sing2.id);
        console.log('Singleton.instance.data.length === sing2.data.length', Singleton.instance.data.length === sing2.data.length);

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
