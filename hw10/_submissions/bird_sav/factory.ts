class VacationFactory {
    public static createVacation(budget: number): Vacation {
        switch (budget) {
            case 500:
                return new WeekendInSouthUT()
            case 1000:
                return new WeekAtDisneyPark()
            case 1500:
                return new Cruise()
            case 5000:
                return new StudyAbroad()
        }
    }
}

abstract class Vacation {
    public budgetMax: number
    constructor(budget: number) {
        this.budgetMax = budget
    }
}

class WeekendInSouthUT extends Vacation {
    constructor() {
        super(500)
    }
}

class WeekAtDisneyPark extends Vacation {
    constructor() {
        super(1000)
    }
}

class Cruise extends Vacation {
    constructor() {
        super(1500)
    }
}

class StudyAbroad extends Vacation {
    constructor() {
        super(5000)
    }
}

