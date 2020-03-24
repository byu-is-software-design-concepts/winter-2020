import IObserver from './IObserver';

export default interface ISubject {
    observers: IObserver[];
    subscribe(observer: IObserver): void;
    notify(): void;
}