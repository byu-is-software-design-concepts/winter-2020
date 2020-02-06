export const uniqueInOrder = str => {
  let arr = []
  let newChar = ''

  for (let i = 0; i < str.length; i++)
  {
    if (str.substring(i, i + 1) === newChar)
    {
      continue;
    }
    arr.push(str.substring(i, i + 1));   
    newChar = str.substring(i, i + 1);
  }

  return arr
}