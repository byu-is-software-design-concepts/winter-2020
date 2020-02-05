export const moveZeroesToEnd = arr => {
  let arr_length = arr.length

  for (var i = 0; i < arr_length; i++)
  {
    let input = arr[i]
    if (input == 0)
    {
      arr.splice(i,1)
      arr.push(input)
    }
  }
  return arr
}
