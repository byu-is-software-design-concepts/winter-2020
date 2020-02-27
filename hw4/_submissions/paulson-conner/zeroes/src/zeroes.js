export const moveZeroesToEnd = arr => {
  arr.forEach((element, index) => {
    if (element === 0) {
      const el = arr.splice(index, 1);
      arr.push(...el);
    }
  });
  return arr;
};
