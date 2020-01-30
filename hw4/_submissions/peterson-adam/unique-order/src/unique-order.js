export const uniqueInOrder = str => {
  let arr = []
  if(str.length !== 0)
  {
    arr.push(str[0]);
  }
  let i;
  
  for(i = 0; i < str.length; i++)
  {
      if((str[i]) !== str[i+1])
      {
          if(str[i+1] !== undefined)
          {
              arr.push(str[i+1])
          }
      }
  }
  console.log(arr);
return arr
}
