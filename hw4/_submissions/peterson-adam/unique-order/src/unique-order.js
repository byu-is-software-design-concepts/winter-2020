export const uniqueInOrder = str => {
  let arr = []
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
return arr
}
