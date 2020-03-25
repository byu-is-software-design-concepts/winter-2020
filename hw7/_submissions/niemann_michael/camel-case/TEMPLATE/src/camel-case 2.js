export const convertToCamelCase = str => {
  let arr = str.split(' ')
  let string = ''
  for(let c of arr){
    string += c.charAt(0).toUpperCase() + c.slice(1)
  }
  return string.charAt(0).toLowerCase() + string.slice(1)
}