export const uniqueInOrder = str => {
  // TODO

  let arr = str.split('');
  let newArr = []
  arr.forEach(function (item, index) {
    if (item != arr[index + 1]) {
      newArr.push(item)
    }
  });

  return newArr
}
