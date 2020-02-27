export const convertToCamelCase = str => {
  let arr = str.split(' ')
  let text = ''
  for(let x of arr){
    text += x.charAt(0).toUpperCase() + x.slice(1)
  }
  return text.charAt(0).toLowerCase() + text.slice(1)
}
