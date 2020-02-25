export const scramble = (str1, str2) => {
  if(str1 === '' && str2 === '')
  {
    return true
  }
  
  let arr1 = str1.split('')
  let arr2 = str2.split('')

  for(let i = 0; i < arr2.length; i++)
  {
    if(arr1.includes(arr2[i]))
    {
      arr1.splice(arr1.findIndex(val => val === (arr2[i])), 1)
    }
    else
    {
      return false
    }
  }
  return true
}
