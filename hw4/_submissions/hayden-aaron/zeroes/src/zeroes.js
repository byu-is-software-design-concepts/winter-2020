export const moveZeroesToEnd = arr => {
  let counter = 0
  for(let i = 0; i < arr.length; i++)
  {
    while(arr[i] === 0)
    {
      arr.splice(i, 1)
      counter++
    }
  }
  for(let j = 0; j < counter; j++)
  {
    arr.push(0)
  }
  return arr
}
