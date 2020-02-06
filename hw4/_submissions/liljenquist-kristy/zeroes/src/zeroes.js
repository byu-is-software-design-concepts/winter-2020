export const moveZeroesToEnd = arr => {
  // sort through array from the end, if 0 remove and add zero to the end
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
    
  return arr
}
