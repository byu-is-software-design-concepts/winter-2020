export const moveZeroesToEnd = arr => {
  const _arr = arr.filter(x => x !== 0);
  const numZeros = arr.length - _arr.length;
  for (let i = 0; i < numZeros; i++) {
    _arr.push(0);
  }
  return _arr;
};
