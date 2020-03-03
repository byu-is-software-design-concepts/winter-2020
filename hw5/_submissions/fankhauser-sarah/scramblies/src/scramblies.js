export const scramble = (str1, str2) => {
  // This is the way I originially did it
  // This was doesn't necessarily work if the string has duplicates of a letter
    // let result = true

    // for (let char of str2) {
    //   if (str1.includes(char) == false) {
    //     result = false
    //     break
    //   }
    // }

    // return result

  // This way works with duplicate letters
  let array1 = str1.split('').sort()
  let array2 = str2.split('').sort()
  let i = 0

  for (let j = 0; i < array2.length && j < array1.length; j++) {
    if (array2[i] === array1[j]) {
      i++
    }
  }

  return (i === array2.length)

}
