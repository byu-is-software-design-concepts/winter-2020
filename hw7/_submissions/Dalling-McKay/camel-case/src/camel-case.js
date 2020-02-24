export const convertToCamelCase = str => {
  let arr = str.split('')
  console.log('made array: ' + arr)
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      arr[i] = str.charAt(i).toLowerCase()
    }
    if (str.charAt(i - 1) == ' ') {
      arr[i] = str.charAt(i).toUpperCase()
    }
  }
  str = arr.join('')
  str = str.replace(/\s/g, '')
  return str
}
