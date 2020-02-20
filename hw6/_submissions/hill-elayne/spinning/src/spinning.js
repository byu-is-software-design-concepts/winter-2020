export const spinWords = sentence => {
    let stringArr = sentence.split(' ')
    for (let i = 0; i < stringArr.length; i++) {
      if(stringArr[i].length > 4) {
        stringArr[i] = stringArr[i].split('').reverse().join('')
      }
    }
    sentence = stringArr.join(' ')
    return sentence
  }