class JoshSingleton {
    public id: number;
    private data: number[] = [];
    private static instance: JoshSingleton
    private constructor() {
        this.id = Math.random()
    }
    public static getInstance(): JoshSingleton {
        if(!JoshSingleton.instance) {
            JoshSingleton.instance = new JoshSingleton()
        }
        return JoshSingleton.instance
    }

    public addData(num: number) {
        this.data.push(num)
    }

    public getData() {
        return this.data
    }
}

const josh = JoshSingleton.getInstance()
const conrad = JoshSingleton.getInstance()

josh.addData(1)
josh.addData(2)
josh.addData(4)

conrad.addData(3)
conrad.addData(5)

console.log(conrad.getData());