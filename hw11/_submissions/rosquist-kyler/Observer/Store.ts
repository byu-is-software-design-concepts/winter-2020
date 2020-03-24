import ISubject from "./ISubject";
import IObserver from './IObserver';

export default class Store implements ISubject {
    observers: IObserver[];
    toiletPaperCount;
    
    constructor() {
        this.toiletPaperCount = 0;
        this.observers = [];
    }
    
    setToiletPaperCount(count: number) : void {
        this.toiletPaperCount = count;
        this.notify();
    }

    getToiletPaperCount() : number {
        return this.toiletPaperCount;
    }

    subscribe(obj: IObserver): void {
        this.observers.push(obj);
    }

    notify(): void {
        for (const o of this.observers) {
            o.update(this);
        }
    }
}