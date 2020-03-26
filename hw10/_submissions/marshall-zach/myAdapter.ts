
interface Russian {
    useCyrillic()
}

interface English {
    useEnglish()
}

class RussianAlphabet implements Russian {
    useCyrillic() {
        console.log('Using Russian...')
    }
}

class EnglishAlphabet implements English {
    useEnglish() {
        console.log('Using English...')
    }
}

class RussianToEnglishAdapter implements English {
    RussianWord: Russian

    constructor(russian: Russian) {
        this.RussianWord = russian
    }

    public useEnglish() {
        console.log('Want to use micro USB, converting to Lightning')
        this.RussianWord.useCyrillic()
    }
}

let russian = new RussianAlphabet()
let russToEng = new RussianToEnglishAdapter(russian)
russToEng.useEnglish()