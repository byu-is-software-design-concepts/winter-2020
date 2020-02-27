export const uniqueInOrder = str => {
  let arr = [];
  if (str === "") return arr;
  arr = [...str].filter((num, idx, self) => num !== self[idx - 1]);
  return arr;
};
