// Create a flyweight for building a forest to be rendered for a video game
class Forest {
  public trees: Tree[];
  public treeFactory: TreeFactory;

  public constructor() {
      this.trees = [];
      this.treeFactory = new TreeFactory();
  }

  public createTree(id, species, height) {
      const treeType = this.treeFactory.getTreeType(species, height);
      this.trees.push(new Tree(id, treeType));
  }
}

class Tree {
  public id: string;
  public treeType: TreeType;

  public constructor(id, treeType) {
      this.id = id;
      this.treeType = treeType;
  }
}

class TreeFactory {
  private treeTypes: TreeType[];

  public constructor() {
      this.treeTypes = [];
  }

  public getTreeType(species, height) {
      if (!this.treeTypes[species + height]) {
          this.treeTypes[species + height] = new TreeType(species, height);
      }

      return this.treeTypes[species + height];
  }
}

class TreeType {
  private species: string;
  private height: string;

  public constructor(species, height) {
      this.species = species;
      this.height = height;
  }
}

const forest = new Forest();
for (let i = 0; i < 100000; i++) {
  forest.createTree('1234', 'Oak', '12')
}
// Should be true
console.log(forest.trees[5000].treeType === forest.treeFactory.getTreeType('Oak', '12'));
// Should be false
console.log(new TreeType('Oak', '12') === forest.treeFactory.getTreeType('Oak', '12'));
