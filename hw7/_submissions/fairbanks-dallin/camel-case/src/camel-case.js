export const convertToCamelCase = str => {
  str = str.split(" ")
  let camelCase = []
  let i = 0
  console.log(str)

  for (const word of str){
    let camelWord = word.charAt(0).toUpperCase() + word.substring(1)
    camelCase.push(camelWord)
  }

  camelCase = camelCase.join("")
  camelCase = camelCase.charAt(0).toLowerCase() + camelCase.substring(1)
  return camelCase
}
