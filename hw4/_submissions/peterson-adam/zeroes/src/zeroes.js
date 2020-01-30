export const moveZeroesToEnd = arr => {

  function moveZeroesToEndMethod()
  {
    let inputArray = [false,1,0,1,2,0,1,3,"a"]
    
    for(i = 0; i < inputArray.length; i++)
    {
      if(inputArray[i] === 0)
      {
        inputArray.splice(i, 1);
        inputArray.push(0);
      }
    }
  }
  return arr
}
