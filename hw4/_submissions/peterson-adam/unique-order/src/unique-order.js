export const uniqueInOrder = str => {
  let arr = []

  function arrayGapChecker ()
  {
      let inputString = "AAAABBBCCDAABBBL";
      let characterArray = inputString.split("");
      let outputString = characterArray[0];
      let i;
  
      for(i = 0; i < characterArray.length; i++)
      {
          if((characterArray[i]) !== characterArray[i+1])
          {
              if(characterArray[i+1] !== undefined)
              {
                  outputString = outputString + characterArray[i+1]
              }
          }
      }
      outputString.substring(0, outputString.length - 1);
      console.log(outputString);
  }  

  return arr
}
