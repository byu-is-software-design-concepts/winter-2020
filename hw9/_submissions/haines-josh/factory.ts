class WeaponFactory {
    public static createWeapon(weapons: number): Weapon {
        switch (weapons) {
            case 1:
                return new Sword()
            case 2:
                return new Spear()
            case 3:
                return new Pike()

        }
    };
}

abstract class Weapon {
    public rangeOfWeapon: number;
    constructor(weapons: number){
        this.rangeOfWeapon = weapons;
    }
}

class Sword extends Weapon {
    constructor() {
        super(1)
    }
}

class Spear extends Weapon {
    constructor() {
        super(2)
    }
}

class Pike extends Weapon {
    constructor() {
        super(3)
    }
}

const sword = WeaponFactory.createWeapon(1);
const spear = WeaponFactory.createWeapon(2);
const pike = WeaponFactory.createWeapon(3);

console.log(sword instanceof Sword)
console.log(spear instanceof Spear)
console.log(pike instanceof Pike)