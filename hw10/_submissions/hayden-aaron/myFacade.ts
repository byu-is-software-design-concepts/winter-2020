class CoronaVirus {
    start() {
        console.log('Virus is starting to spread')
    }
    slow() {
        console.log('Virus is slowing...')
    }
    accelerate() {
        console.log('Virus is sprading quicker...')
    }
    die() {
        console.log('Virus has been cured and is no longer spreading')
    }
}

class MedicalFacility {
    start() {
        console.log('Medical facility starts looking for a cure')
    }
    found() {
        console.log('Medical facility found a cure')
    }
    release() {
        console.log('Medical facility releases cure')
    }
}

class People {
    notice() {
        console.log('People notice the virus')
    }
    panic() {
        console.log('People panic')
    }
    getCured() {
        console.log('People are cured')
    }
    stopPanicing() {
        console.log('People stop panicing')
    }
}

class SchoolSystem {
    shutsDown() {
        console.log('School system shuts down')
    }
    start() {
        console.log('School system starts up again')
    }
}

class NBA {
    shutsDown() {
        console.log('NBA shuts down!!!')
    }
    start() {
        console.log('NBA starts up again')
    }
}

class PandemicFacade {
    private coronaVirus: CoronaVirus
    private medicalFacility: MedicalFacility
    private people: People
    private schoolSystem: SchoolSystem
    private nba: NBA

    constructor(coronaVirus: CoronaVirus, medicalFacility: MedicalFacility, people: People, schoolSystem: SchoolSystem, nba: NBA) {
        this.coronaVirus = coronaVirus
        this.medicalFacility = medicalFacility
        this.people = people
        this.schoolSystem = schoolSystem
        this.nba = nba
    }

    public pandemicBegins() {
        this.coronaVirus.start()

        this.medicalFacility.start()

        this.people.notice()

        this.schoolSystem.shutsDown()

        this.nba.shutsDown()

        this.people.panic()

        this.coronaVirus.accelerate()
    }

    public pandemicContinues() {
        this.people.panic()
        this.coronaVirus.accelerate()

        this.people.panic()
        this.coronaVirus.accelerate()
    }

    public pandemicEnds() {
        this.people.panic()
        this.medicalFacility.found()
        this.people.panic()
        this.medicalFacility.release()
        this.people.getCured()
        this.schoolSystem.start()
        this.nba.start()
        this.coronaVirus.slow()
        this.coronaVirus.die()
    }
}

let coronaVirus = new CoronaVirus()
let medicalFacility = new MedicalFacility()
let people = new People()
let schoolSystem = new SchoolSystem()
let nba = new NBA()

let pandemic = new PandemicFacade(coronaVirus, medicalFacility, people, schoolSystem, nba)
pandemic.pandemicBegins()
pandemic.pandemicContinues()
pandemic.pandemicEnds()



