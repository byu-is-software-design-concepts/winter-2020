export const spinWords = sentence => {
  let aWords = sentence.split(' ')
  

  for(let x = 0; x < aWords.length; x++){
    if (aWords[x].length >= 5){
      aWords[x] = aWords[x].split('').reverse().join('')
    }
  }

  return aWords.join(' ')
}
