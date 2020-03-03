export const scramble = (str1, str2) => {
  // TODO

  let firstHash = Object()
  let secondHash = Object()
  let answer = true
  str1.split('').forEach(letter => {
    firstHash[letter] ? firstHash[letter]++ : firstHash[letter] = 1
  })
  str2.split('').forEach(letter => {
    secondHash[letter] ? secondHash[letter]++ : secondHash[letter] = 1
  })
  Object.keys(secondHash).forEach(key => {
     if (answer === true){
      if (firstHash[key]){
        if (firstHash[key] < secondHash[key]){
          answer = false
        }
      }
      else{
        answer = false
      }
    }
  })
  return answer
}
