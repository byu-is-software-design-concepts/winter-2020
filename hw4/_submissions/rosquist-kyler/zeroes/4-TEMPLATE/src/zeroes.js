export const moveZeroesToEnd = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.push(arr[i]);
      arr.splice(i,1);
    }
  }
  return arr;
}
