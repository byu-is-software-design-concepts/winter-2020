export const createMumble = str => {
  let iCount = 0;
  let arr = str.split("");
  let output = "";

  for(let outter = 0; arr.length > outter; outter++)
  { 
    output = output + str.charAt(outter).toUpperCase();
    for(let inner = 0; counter > inner; inner++)
    {
      output = output + str.charAt(outter).toLowerCase();
    }
    iCount++;
    output = output + "-"
  }

  output.substring(0, str.length - 1);
  return output
}
