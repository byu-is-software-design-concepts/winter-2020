export const createMumble = str => {
  let strArray = str.split("");
  let strOutput = "";
  let counter = 0;
  for(let i = 0; strArray.length > i; i++)
  {
    let strHolder = 
    strOutput = strOutput + str.charAt(i).toUpperCase();
    for(let j = 0; counter > j; j++)
    {
      strOutput = strOutput + str.charAt(i).toLowerCase();
    }
    counter++;
    strOutput = strOutput + "-"
  }
  strOutput.substring(0, str.length - 1);
  return strOutput
}
