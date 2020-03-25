export const scramble = (str1, str2) => {
  let f_array = []
  let s_array = []
  let finalR = false

  let i2 = 1
  for (let i = 0; i < str1.length; i++)
  {
    let myChar = str1.substring(i,i2)
    f_array.push(myChar)
    i2 = i2 + 1
  }

  i2 = 1
  for (let i = 0; i < str2.length; i++)
  {
    let myChar = str2.substring(i,i2)
    s_array.push(myChar)
    i2 = i2 + 1
  }

  for (let i = 0; i < str2.length; i++)
  {
    let checkChar = s_array[i]
    if (f_array.includes(checkChar))
    {
      finalR = true
      let repeat = f_array.indexOf(checkChar)
      f_array.splice(repeat,1)
    }
    else
    {
      finalR = false
    }
    
    if (finalR === false)
    {
      break
    }

    i2 = i2 + 1
  }

  return finalR
}
