export const scramble = (str1, str2) => {
  let arr1 = str1.split('')
  let arr2 = str2.split('')
  let compareArr = []
  let trueFalse = false

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        compareArr.push(arr1[i])
      }
    }
  }

  if (compareArr = arr1) {
    trueFalse = true
  }
  return trueFalse
}
