export const spinWords = sentence => {
  let arr = sentence.split(' ')
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length >= 5) {
      let word = ''
      for(let j = arr[i].length - 1; j >= 0; j--) {
        word += arr[i][j]
      }
      arr[i] = word
    }
  }
  
  return arr.join(' ')
}