export const spinWords = words => {
    let newWords = words.split(' ')
    console.log(newWords[1].length)
    let newArray = []
    for (i = 0; i < newWords.length; i++) {
        if (newWords[i].length < 5) {
            newArray.push(newWords[i])
        } else if (newWords[i].length >= 5) {
            let word = newWords[i].split('').reverse().join('')
            console.log(word)
            newArray.push(word)
        }
    }
    return newArray.join(' ')
}
