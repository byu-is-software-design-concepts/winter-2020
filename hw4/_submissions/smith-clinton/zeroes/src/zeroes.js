export const moveZeroesToEnd = arr => {
  // TODO
  var zeros = []
  console.log(arr)
  var newArray = arr.filter(function(e) { return e !== 0})
  console.log(newArray)
  while(arr.length!=newArray.length){
    newArray.push(0)
  }
  console.log(newArray)
  return newArray

}
