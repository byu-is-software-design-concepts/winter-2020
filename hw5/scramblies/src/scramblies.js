export const scramble = (str1, str2) => {

  console.log("------------")

  if (str1 === str2) {
    console.log("str1 == str2 return true", str1, str2);
    return true
  }

  let arr1 = str1.split('');
  let arr2 = str2.split('');

  arr2.forEach(function (item, index) {
    console.log("item: ", item);
    console.log("arr1: ", arr1);
    if (arr1.includes(item)) {
      console.log("arr1 includes: ", item)
      let index = arr1.indexOf(item);
      if (index > -1) {
        arr1.splice(index, 1);

      }
    } else {
      console.log("returning false");
      return false
    }
  })

  console.log("returning true");
  return true
}