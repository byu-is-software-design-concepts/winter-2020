export const scramble = (str1, str2) => {

  let flag = true

  if (str1 === str2) {
    return flag;
  }

  let arr1 = str1.split('');
  let arr2 = str2.split('');

  arr2.forEach(function (item, index) {
    if (arr1.includes(item)) {
      let index = arr1.indexOf(item);
      if (index > -1) {
        arr1.splice(index, 1);
      }
    } else {
      flag = false;
    }
  })

  return flag;
}