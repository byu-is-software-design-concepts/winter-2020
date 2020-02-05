export const uniqueInOrder = str => {
  let arr = [];
  if (str = "") {
    return arr;
  }
  arr = str.split("");
  arr = arr.filter(unique)
  return arr;
};
