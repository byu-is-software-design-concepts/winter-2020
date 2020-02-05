export const moveZeroesToEnd = arr => {
  let arr2 = []
  let count = 0
  for (let i = 0; i < arr.length; ++i)
  {
    if (arr[i] === 0)
    {
      ++count
    }
    else 
    {
      arr2.push(arr[i])
    }
  }
  for (let i = 0; i < count; ++i)
  {
    arr2.push(0)
  }
  return arr2
}
