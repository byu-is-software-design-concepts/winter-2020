// Create a Flyweight forest of tree objects
class Tree {
    private sharedType: any;

    constructor(sharedType: any) {
        this.sharedType = sharedType;
    }

    public operation(uniqueType): void {
        const s = JSON.stringify(this.sharedType);
        const u = JSON.stringify(uniqueType);
        console.log(`Tree: Displaying shared (${s}) and unique (${u}) type.`);
    }
}

class ForestFactory {
    private trees: {[key: string]: Tree} = <any>{};

    constructor(initialTrees: string[][]) {
        for (const type of initialTrees) {
            this.trees[this.getKey(type)] = new Tree(type);
        }
    }

    private getKey(type: string[]): string {
        return type.join('_');
    }

    public getForest(sharedType: string[]): Tree {
        const key = this.getKey(sharedType);

        if (!(key in this.trees)) {
            console.log('ForestFactory: Can\'t find a tree, creating new one.');
            this.trees[key] = new Tree(sharedType);
        } else {
            console.log('ForestFactory: Reusing existing tree.');
        }

        return this.trees[key];
    }

    public listFlyweights(): void {
        const count = Object.keys(this.trees).length;
        console.log(`\ForestFactory: I have ${count} trees:`);
        for (const key in this.trees) {
            console.log(key);
        }
    }
}

