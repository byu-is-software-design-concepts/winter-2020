class SprueBuilder {
    public sprue: Sprue
    constructor() {}
    public reset() {
        this.sprue = new Sprue()
    }
    public build() {
        return this.sprue
    }
    public withHead() {
        this.sprue.hasHeads = true
        return this
    }
    public withWeapon() {
        this.sprue.hasWeapons = true
        return this
    }
    public withTorso() {
        this.sprue.hasTorsos = true
        return this
    }
}

class Sprue {
    public hasHeads: boolean
    public hasWeapons: boolean
    public hasTorsos: boolean
}

const human = new SprueBuilder()
    .withHead()
    .withTorso()
    .withWeapon()
    .build()

const Ogor = new SprueBuilder()
    .withHead()
    .withTorso()
    .build()