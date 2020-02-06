export const moveZeroesToEnd = arr => {
  // TODO
  let zerosArr = [];
  let newArr = [];

  arr.forEach(function (item) {
    if (item === 0) {
      zerosArr.push(item);
    } else {
      newArr.push(item);
    }
  });

  arr = newArr.concat(zerosArr);

  return arr;
}
