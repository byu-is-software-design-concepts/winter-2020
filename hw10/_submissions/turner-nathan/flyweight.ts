// Create an army (similar to the example in class, just want to make sure I really get it).
class Army {
    public troops: Troop[];
    public troopFactory: TroopFactory;

    public constructor() {
        this.troops = [];
        this.troopFactory = new TroopFactory();
    }

    public recruitTroop(name, militaryBranch, role) {
        const troopType = this.troopFactory.getTroopType(militaryBranch, role)
        this.troops.push(new Troop(name, troopType))
    }
}

class Troop {
    public name: string;
    public troopType: TroopType;

    public constructor(name, troopType) {
        this.name = name;
        this.troopType = troopType;
    }
}

class TroopFactory {
    private troopTypes: TroopType[];

    public constructor() {
        this.troopTypes = [];
    }

    public getTroopType(militaryBranch, role) {
        if (!this.troopTypes[militaryBranch + role]) {
            this.troopTypes[militaryBranch + role] = new TroopType(militaryBranch, role);
        } 

        return this.troopTypes[militaryBranch + role];
    }
}

class TroopType {
    private militaryBranch: string;
    private role: string;

    public constructor(militaryBranch, role) {
        this.militaryBranch = militaryBranch;
        this.role = role;
    }
}

const army = new Army()
for(let i = 0; i < 100000; i++) {
    army.recruitTroop('GI Joe', 'Marine', 'GI')
}
// Should be true; same object.
console.log(army.troops[5000].troopType === army.troopFactory.getTroopType('Marine', 'GI'))
// Should be false; two different objects.
console.log(new TroopType('Marine', 'GI') === army.troopFactory.getTroopType('Marine', 'GI'))
