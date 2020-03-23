export const uniqueInOrder = str => {
  
  let arr = []
  const strArr = str.split("");

  for (let i = 1; i < strArr.length; i++) {
    if (i === 0 || strArr[i] != arr[arr.length-1]) {
      arr.push(strArr[i])
    }
  }

  return arr;
}
