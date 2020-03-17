export const isXAndOValid = str => {
  let isValidBool = false;
  let x = 0;
  let o = 0;

  
  let strArray = str.split("");
  for(let i = 0; strArray.length > i; i++)
  {
    if(strArray[i] === 'x')
    {
      x ++;
    }
    if(strArray[i] === 'o')
    {
      o ++;
    }
  }
  if(x === o)
  {
    isValidBool = true;
  }
  return isValidBool
}
