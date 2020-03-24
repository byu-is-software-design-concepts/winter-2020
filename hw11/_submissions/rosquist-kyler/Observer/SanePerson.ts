import Store from "./Store"
import Person from "./Person"

export default class SanePerson extends Person {
    walmart : Store = new Store();

    update(store: Store): void {
        this.walmart = store;
        this.reactToChange();
    }

    reactToChange(): void {
        this.layLowFoWhile();
    }

    layLowFoWhile(): void {
        console.log("Sane Person: I'm good for a while and I don't wanna get sick. Imma chill here for a while.");
    }
}