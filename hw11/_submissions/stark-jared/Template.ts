abstract class HouseTemplate {
    public templateMethod(wallHeight: number): void {
        this.buildFoundation()
        this.buildWalls(wallHeight)
        this.buildPatio()
        this.buildColumns()
    }

    protected buildFoundation() {
        console.log("Abstract work, all foundations same sizer")
    }

    protected abstract buildWalls(height: number): void

    protected buildPatio(): void { }
    protected buildColumns(): void { }

}

class HouseNoColumns extends HouseTemplate {
    buildWalls(height: number) {
        console.log(`Concrete class work, walls built to custom heigh of ${height}`)
    }
    buildPatio() {
        console.log("Concrete class work, adding optional patio")
    }
}

class HouseNoPatio extends HouseTemplate {
    buildWalls(height: number) {
        console.log(`Concrete class work, walls built to custom heigh of ${height}`)
    }
    buildColumns() {
        console.log("Concrete class work, adding optional columns")
    }
}