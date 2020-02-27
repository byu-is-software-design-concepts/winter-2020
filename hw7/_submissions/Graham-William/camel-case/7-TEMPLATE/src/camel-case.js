export const convertToCamelCase = str => {
  // TODO
  myArray = str.split(" ")

  for(let i = 1; i<myArray.length; i++) {
    myArray[i].charAt(0) = myArray[i].charAt(0).toUpperCase()
  }

  myArray.join().replace(",", "")

  return str
}
