export const convertToCamelCase = str => {

  let arr = str.split(' ');
  let camel = '';
  let up;
  let sub;

  arr.forEach(function (item, index) {
    item = item.toLowerCase();
    if (index != 0) {
      up = item.charAt(0).toUpperCase()
      sub = item.substring(1)
      item = up + sub;
    }
    camel += item;
  })
  return camel
}