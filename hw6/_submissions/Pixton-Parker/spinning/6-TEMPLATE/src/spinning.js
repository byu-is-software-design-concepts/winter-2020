export const spinWords = sentence => {
  let swords = []
  let i = 0
  let i2 = 0
  let i3 = 1

  while (i > -1)
  {
    i = sentence.indexOf(" ",0)
    if (i === -1)
    {
      let added = sentence.substring(i2,(sentence.length))
      swords.push(added)
    }
    else
    {
      let added = sentence.substring(i2,i)
      swords.push(added)
      i2 = i
    }
  }

  for (i=0; i<swords.length;i++)
  {
    let backs = []
    if (swords[i].length > 5)
    {
      for (i2=0; i2<swords[i].length;i2++)
      {
        let myChar = swords[i].substring(i2,i3)
        backs.push(myChar)
      }
      let backsword = ''
      for (i2=0; i2<swords[i].length;i2++)
      {
        i3 = swords[i].length
        let myChar = backs[i3]
        backsword = backsword + myChar
      }
      swords[i] = backsword
    }
  }
  let output =''
  for (i=0; i<swords.length;i++)
  {
    output = output + " " + swords[i]
  }

  return output
}
