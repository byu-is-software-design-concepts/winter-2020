export const convertToCamelCase = str => {
  let arr = str.split(' ')
  for (let i = 1; i < arr.length; i++) {
    arr[i] = helpToUpperCase(arr[i])
  }
  str = arr.join('')
  return str
}

const helpToUpperCase = str => {
  let arr = str.split('')
  arr[0] = arr[0].toUpperCase()
  str = arr.join('')
  return str
}