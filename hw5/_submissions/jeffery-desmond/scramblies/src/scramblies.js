export const scramble = (str1, str2) => {
    let result;
    let resultCount;
    let stringOneArray = str1.split("")
    let stringTwoArray = str2.split("")
    resultCount = 0

    for (let letter1 of stringOneArray) {
        for (let letter2 of stringTwoArray) {
            if (letter1 === letter2) {
                resultCount += 1
            }
        }
    }
    if (resultCount == stringTwoArray.length) {
        result = true;
    }

  return result
}
