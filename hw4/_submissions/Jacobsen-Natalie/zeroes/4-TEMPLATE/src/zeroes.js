export const moveZeroesToEnd = arr => {
  let zerocounter = 0
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] === 0)
    {
      arr.splice(i, 1);
      zerocounter += 1;
      i -= 1;
    }
  }
  for (let i = 0; i < zerocounter; i++)
    {
      arr.push(0);
    }
  return arr
}
