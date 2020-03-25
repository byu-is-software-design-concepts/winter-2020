export const convertToCamelCase = str => {
  var list = str.toLowerCase();
  list = list.split(" ");
  var ret = list[0];
  for (var i = 1; i < list.length; i++) {
    ret += list[i].charAt(0).toUpperCase() + list[i].slice(1);
  }
  return ret
}
