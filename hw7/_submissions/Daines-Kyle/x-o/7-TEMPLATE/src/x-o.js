export const isXAndOValid = str => {
  let charArr = str.split('')
  let x = 0
  let o = 0
  for (let i = 0; i < charArr.length; ++i)
  {
    if (charArr[i] === 'x')
    {
      ++x
    }
    else if (charArr[i] === 'o')
    {
      ++o
    }
    else
    {
      continue;
    }
  }
  if (x === o)
  {
    return true
  }
  else 
  {
    return false
  }
}
