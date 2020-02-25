export const isXAndOValid = str => {
  let isValidBool = false;
  let xCounter = 0;
  let oCounter = 0;

  let strArray = str.split("");
  for(let i = 0; strArray.length > i; i++)
  {
    if(strArray[i] === 'x')
    {
      xCounter ++;
    }
    if(strArray[i] === 'o')
    {
      oCounter ++;
    }
  }
  if(xCounter === oCounter)
  {
    isValidBool = true;
  }
  return isValidBool
}
