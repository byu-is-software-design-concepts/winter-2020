export const isXAndOValid = str => {
  let arr1 = str.split('')
  let xCount = 0
  let oCount = 0
  for(let i = 0; i < arr1.length; i++)
  {
    if(arr1[i] === 'X' || arr1[i] === 'x')
    {
      xCount++
    }
    else if(arr1[i] === 'O' || arr1[i] === 'o')
    {
      oCount++
    }
  }
  if(xCount === oCount)
  {
    return true
  }

  return false
}
