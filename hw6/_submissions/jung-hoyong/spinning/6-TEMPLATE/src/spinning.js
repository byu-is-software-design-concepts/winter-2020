export const spinWords = sentence => {
  let arr = sentence.split(' ')

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      arr[i] = reverseString(arr[i])
    }
  }

  sentence = arr.join(' ')

  return sentence
}

const reverseString = word => {
  let arr = word.split('')
  let temp = ''
  for (let i = 0; i < arr.length / 2; i++) {
    temp = arr[i]
    arr[i] = arr[arr.length - i - 1]
    arr[arr.length - i - 1] = temp
  }
  word = arr.join('')
  return word
}