export const convertToCamelCase = str => {
  let chars = []
  let output = ""

  let i2 =1
  for (let i = 0; i<str.length; i++)
  {
    let myChar = str.substring(i,i2)
    chars.push(myChar)
    i2 = i2 + 1
  }

  for (let i = 0; i<chars.length; i++)
  {
    if (chars[i] == " ")
    {
      i2 = i+1
      chars[i2] = chars[i2].toUpperCase()
      chars.splice(i,1)
    }
  }
  for (let i = 0; i<chars.length; i++)
  {
    output = output + chars[i]
  }





  return output
}
