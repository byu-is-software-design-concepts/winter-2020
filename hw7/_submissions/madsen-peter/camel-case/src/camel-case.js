export const convertToCamelCase = str => {
  // TODO
  const splitStr = str.split("")
  const camelSplit = []
  let camelCount = 0

  for (let count = 0; count < splitStr.length; count++) {
    if (splitStr[count - 1] === " ") {
      camelSplit[camelCount++] = splitStr[count].toUpperCase()
    }
    else if (splitStr[count] != " ") {
      camelSplit[camelCount++] = splitStr[count].toLowerCase()
    }
  }

  const camelStr = camelSplit.join("")

  return camelStr
}
