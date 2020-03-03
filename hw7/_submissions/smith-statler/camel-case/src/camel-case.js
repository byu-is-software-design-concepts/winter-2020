const capitalizeFirstLetter = word => {
  let wordChars = word.split('')
  let newWord = ""
  for(let i = 0; i < wordChars.length; i++){
    if(i === 0){
      newWord += wordChars[i].toUpperCase()
    }
    else{
      newWord += wordChars[i].toLowerCase()
    }
  }

  return newWord
}

export const convertToCamelCase = str => {
  let wordsArr = str.split(' ');
  // Iterate through the array, add words to each other
  let newString = ""
  for(let i = 0; i < wordsArr.length; i++){
    if(i === 0){
      newString += wordsArr[i].toLowerCase()
    }
    else{
      newString += capitalizeFirstLetter(wordsArr[i])
    }
    
  }

  return newString
}
