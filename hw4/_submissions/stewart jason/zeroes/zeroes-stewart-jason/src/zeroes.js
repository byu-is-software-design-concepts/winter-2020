export const moveZeroesToEnd = arr => {
  // TODO
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]===0){
      arr.splice(index,1)
      arr.push(0)
    }
  }
  return arr
}
