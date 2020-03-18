class PatientBuilder {
    public patient: Patient
    constructor() {}
    public reset() {
        this.patient = new Patient()
    }
    public build() {
        return this.patient
    }
    public temperature(temp) {
        if (temp >= 99) {
            this.patient.hasFever = true
        }
        else {
            this.patient.hasFever = false
        }
        return this
    }
    public shortOfBreath() {
        this.patient.shortOfBreath = true
        return this
    }
    public coughing() {
        this.patient.isCoughing = true
        return this
    }
    public sneezing() {
        this.patient.isSneezing = true
        return this
    }
    public throatHurts() {
        this.patient.hasSoreThroat = true
        return this
    }
}

class Patient {
    public hasFever: boolean
    public shortOfBreath: boolean
    public isCoughing: boolean
    public isSneezing: boolean
    public hasSoreThroat: boolean
}

const commonCold = new PatientBuilder()
    .coughing()
    .sneezing()

const strep = new PatientBuilder()
    .throatHurts()
    .temperature(100)

const covid19 = new PatientBuilder() 
    .coughing()
    .shortOfBreath()
    .temperature(101)
