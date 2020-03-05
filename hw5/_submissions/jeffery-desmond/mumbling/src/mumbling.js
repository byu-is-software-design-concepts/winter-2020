export const createMumble = str => {
    let stringArray = str.split("")
    let outerCount = 0
    let letter;
    for (let s of stringArray) {
        letter = stringArray[outerCount]
        stringArray[outerCount] = s.toUpperCase()
        if (outerCount > 0) {
            for (let innerCount = 0; innerCount < outerCount; innerCount++) {
                
                stringArray[outerCount] += letter

            }
        }
        
        
        outerCount = outerCount + 1
    }

    str = stringArray.join("-");

  return str
}
