class Tree {
    type: TreeType;
    latitude: number;
    longitude: number;
    heightInFeet: number;

    constructor(name:string, color:string, texture:string, latitude:number, longitude:number, heightInFeet:number) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.heightInFeet = heightInFeet;
        this.type = TreeFactory.getTreeType(name, color, texture);
    }

    draw() {
        console.log(`The tree is at (${this.latitude}, ${this.longitude}) and is ${this.heightInFeet} heigh.`);
        this.type.draw();
    }
}

class TreeType {
    name: string;
    color: string;
    texture: string;
    constructor(name:string, color:string, texture:string) {
        this.name = name;
        this.color = color;
        this.texture = texture;
    }

    draw() {
        console.log(`It is a ${this.name} tree with bark that is ${this.color} and ${this.texture}`);
    }
}

class TreeFactory {
    static types: TreeType[];

    static getTreeType(name:string, color:string, texture:string) : TreeType {
        let typeToReturn : TreeType;

        typeToReturn = TreeFactory.types.find((type) => {
            type.name = name;
            type.color = color;
            type.texture = texture;
        });
        if (typeToReturn == null) {
            typeToReturn = new TreeType(name, color, texture);
        }

        return typeToReturn
    }
}

class Forest {
    trees: Tree[];

    createTree(name:string, color:string, texture:string, latitude:number, longitude:number, heightInFeet:number) {
        this.trees.push(new Tree(name, color, texture, latitude, longitude, heightInFeet));
    }

    renderTrees() {
        this.trees.forEach((tree) => {
            tree.draw()
        });
    }
}

export default Forest;