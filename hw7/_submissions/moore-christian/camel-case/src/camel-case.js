export const convertToCamelCase = str => {
  let arr = str.split(' ');

  let newArr = arr.slice(0,1)

  for (var i = 1; i < arr.length; i++){
    newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
  }
  let newString = newArr.join('')

  return newString
}
