export const spinWords = sentence => {
  let myWords = sentence.split(' ')
  for(let i = 0; i < myWords.length; i++){
    if(i % 2 === 1){
      let word = myWords[i]
      word = word.split()
      word.reverse()
      word.join()
      myWords[i] = word
    }
  }
  return myWords.join(' ')
}
