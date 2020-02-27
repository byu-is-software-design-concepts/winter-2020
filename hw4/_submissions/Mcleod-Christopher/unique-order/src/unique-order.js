export const uniqueInOrder = str => {
  let arr = []
  // TODO
  // Cool Version
  arr = Array.from(new Set(str.split('')))

  //Initial Attempts
  /*
  let strarr = str.split("")
  for (let i = 0; i < strarr.length; i++) {
    if (strarr[i] != arr.find(strarr[i])) {
      arr.push(strarr[i])
    }
  }
  */

  return arr
}
