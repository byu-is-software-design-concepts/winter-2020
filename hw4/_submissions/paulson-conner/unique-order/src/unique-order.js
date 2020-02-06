export const uniqueInOrder = str => {
  const arr = str.split('');
  const newArr = [];

  arr.forEach(element => {
    if (element !== newArr[newArr.length - 1]) {
      newArr.push(element);
    }
  });

  return newArr;
};
