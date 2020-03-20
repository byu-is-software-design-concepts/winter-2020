export const moveZeroesToEnd = arr => {
  // TODO
  let newarr = [];
  let numZeros = 0;

  arr.forEach(value => {
    if (value === 0) {
      numZeros++;
    } else {
      newarr.push(value);
    }
  });

  for (let i = 0; i < numZeros; i++) {
    newarr.push(0);
  }

  return newarr;
};

// let x = moveZeroesToEnd([3, 0, 2, 1, 3, 0, 4, 5]);
// console.log(x);
