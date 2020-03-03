export const uniqueInOrder = str => {
  let arr = []
  arr = str.split("")
  for (let i = 0; i < arr.length; i++)
  {
      while (arr[i] === arr[i + 1])
      {
        arr.splice(i, 1)
      }
  }
  return arr
}