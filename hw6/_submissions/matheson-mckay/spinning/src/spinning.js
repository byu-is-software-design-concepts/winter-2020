export const spinWords = sentence => {
  let arrWords = sentence.split(' ')
  for (let i = 0; i < arrWords.length; i++){
    let tempArr = arrWords[i].split('')
    if(tempArr.length >= 5){
      arrWords[i] = tempArr.reverse().join('')
    }
  }
  return arrWords.join(" ")
}






