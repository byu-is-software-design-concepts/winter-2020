export const moveZeroesToEnd = arr => {
    // let inputArray = [false,1,0,1,2,0,1,3,"a"]
    let i;
    for(i = 0; i < arr.length; i++)
    {
      if(arr[i] === 0)
      {
        arr.splice(i, 1);
        arr.push(0);
      }
    }
  return arr
}
