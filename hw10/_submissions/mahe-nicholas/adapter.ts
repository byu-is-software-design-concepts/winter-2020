interface ASL {
    speakWithSign()
}

interface English {
    speakWithEnglish()
}

class ASLLanguage implements ASL {
    speakWithSign() {
        console.log('ASL dialogue')
    }
}

class EnglishLanguage implements English {
    speakWithEnglish() {
        console.log('English dialogue')
    }
}

class ASLToEnglishAdapter implements English {
    ASLWord: ASL

    constructor(asl: ASL) {
        this.ASLWord = asl
    }

    public speakWithEnglish() {
        console.log('Tom Brady is a pirate now')
        this.ASLWord.speakWithSign()
    }
}

let asl = new ASLLanguage()
let aslToEnglish = new ASLToEnglishAdapter(asl)
aslToEnglish.speakWithEnglish()