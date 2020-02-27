export const uniqueInOrder = str => {
  let arr = str.split('');
  let new_arr = []
  arr.forEach(function (element, index) {
    if (element != arr[index + 1]) {
      new_arr.push(element)
    }
  });

  return new_arr
}