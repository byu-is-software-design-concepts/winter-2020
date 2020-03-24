import Store from "./Store"
import Person from "./Person"

export default class UtahPerson extends Person {
    walmart : Store = new Store();

    update(store: Store): void {
        this.walmart = store;
        this.reactToChange();
    }

    reactToChange(): void {
        if (this.walmart.getToiletPaperCount()) {
            this.runToStore(this.walmart.getToiletPaperCount());
        } else {
            this.hideInBasement();
        }
    }

    runToStore(count: number): void {
        console.log(`UtahPerson: Heading to the store to catch or spread Corona before the ${count} rolls of TP are out. Be back in 7 hours.`);
    }

    hideInBasement(): void {
        console.log("UtahPerson: Waiting for Wal-Mart to restock the toilet paper isle, even though I've got enough to last a lifetime.");
    }
}