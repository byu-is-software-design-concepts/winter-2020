import ISubject from "./ISubject";
import IObserver from "./IObserver";
import Store from "./Store"

export default abstract class Person implements IObserver {
    walmart : Store = new Store();
    update(store: Store): void {}
    reactToChange(): void {}
}