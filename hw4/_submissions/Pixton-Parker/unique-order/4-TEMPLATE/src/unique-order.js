export const uniqueInOrder = str => {
  let arr = []
  var myLegnth = str.length;
  let i2 = 1

  for (let i = 0; i < myLegnth; i++)
  {
    let myChar = str.substring(i, i2)
    let testChar = '2'
    if ( i >= 1)
    {
      testChar = str.substring((i-1),(i2-1))
    }
    if (myChar != testChar)
    {
      arr.push(myChar)
    }
    i2 = i2 + 1
  }
  return arr
  
  //This is kinda janky but for some reason when I did this 
  //it didn't get rid of duplictes:
  /*
    for (let i = 0; i < myLegnth; i++)
  {
    let myChar = str.substring(i, i2)

    if (myChar in arr == false)
    {
      arr.push(myChar)
    }
    i2 = i2 + 1
  }
  */
}
