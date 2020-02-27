export const moveZeroesToEnd = arr => {
  // TODO
  let counter = 0
  let result = []
  arr.forEach(input => {
    if (input === 0){
      counter++
    }
    else{
      result.push(input)
    }
  })
  for (let x = 0; x < counter; x++){
    result.push(0)
  }
  return result
}
