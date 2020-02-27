export const convertToCamelCase = str => {
  let strArr = str.split(' ')
  for (let i = 1; i < strArr.length; ++i)
  {
    strArr[i] = strArr[i].substr(0,1).toUpperCase() + strArr[i].substr(1)
  }
  let finalStr = ''
  for (let i = 0; i < strArr.length; ++i)
  {
    finalStr = finalStr.concat(strArr[i])
  }
  return finalStr
}
