export const spinWords = sentence => {
  // Split sentence into words.
  let arr = sentence.split(' ')
  // Loop over words
  for(let i = 0; i < arr.length; i++) {
    // Check if the word is 5 characters or longer.
    if(arr[i].length >= 5) {
      // Flip the word and save to that place in array.
      let word = ''
      for(let j = arr[i].length - 1; j >= 0; j--) {
        word += arr[i][j]
      }
      arr[i] = word
    }
  }
  // Joined array with spaces.
  return arr.join(' ')
}