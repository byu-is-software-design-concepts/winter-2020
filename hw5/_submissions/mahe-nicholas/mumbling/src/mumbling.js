export const createMumble = str => {
  // TODO

  if (str === ""){
    return ""
  }
  else{
    let counter = 1
    let answer = ""
    let hashArray
    str.split('').forEach(letter => {
      for (let x = 0; x < counter; x++){
        x === 0 ? letter = letter.toUpperCase() : letter = letter.toLowerCase()
        answer += letter
      }
      counter === str.length ? null : answer += '-'
      counter++
    })
    return answer
  }
  

  

}
