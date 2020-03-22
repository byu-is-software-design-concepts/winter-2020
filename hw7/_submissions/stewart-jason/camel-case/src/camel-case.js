export const convertToCamelCase = str => {
  str = str.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
  str = str.charAt(0).toLowerCase()+str.substring(1);
  return str.replace(/ /g,"")
}
