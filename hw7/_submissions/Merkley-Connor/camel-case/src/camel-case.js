export const convertToCamelCase = str => {
  let arr = str.split(' ')
  let str = ''
  for(let x of arr){
    str = str + x.charAt(0).toUpperCase() + x.slice(1)
  }
  return str.charAt(0).toLowerCase() + str.slice(1)
}