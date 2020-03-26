class HouseTemplate {
    constructor(kitchResp, roomResp, mastResp, bathResp, garResp) {
        this.kitchen = kitchResp
        this.rooms = roomResp
        this.masterSuite = mastResp
        this.bathrooms = bathResp
        this.garage = garResp
    }
    kitchen = 0
    rooms = 0
    masterSuite = 0
    bathrooms = 0

    garage = 0

}

class Standard extends HouseTemplate {
    constructor(kitchResp, roomResp, mastResp, bathResp, garResp) {
        super(kitchResp, roomResp, mastResp, bathResp, garResp)
    }
}

class Luxury extends HouseTemplate {
    constructor(kitchResp, roomResp, mastResp, bathResp, garResp) {
        super(kitchResp, roomResp, mastResp, bathResp, garResp)
        this.pool = 1
        this.theatre = 1
        this.gym = 1
    }
}