export const isXAndOValid = str => {
  let chars = []
  let output = false
  let xcount = 0
  let ocount = 0

  let i2 =1
  for (let i = 0; i<str.length; i++)
  {
    let myChar = str.substring(i,i2)
    chars.push(myChar)
    i2 = i2 + 1
  }

  for (let i = 0; i<chars.length; i++)
  {
    if (chars[i] == "x" || chars[i] == "X")
    {
      xcount = xcount + 1
    }
    if (chars[i] == "o" || chars[i] == "O")
    {
      ocount = ocount + 1
    }
  }

  if (xcount === ocount)
  {
    output = true
  }


  return output
}
