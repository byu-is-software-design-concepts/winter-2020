export const moveZeroesToEnd = arr => {
  // TODO
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === 0)
    {
      arr.splice(i,1)
      arr.push(0);
    }
  }

  return arr
}
