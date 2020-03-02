const convertToCamelCase = str => {
  // TODO
  myArray = str.split(" ")
  var camelWord = myArray[0];

  for(let i = 1; i<myArray.length; i++) {
    let word = myArray[i].replace(myArray[i].charAt(0),myArray[i].charAt(0).toUpperCase())
    camelWord += word
  }

  str = camelWord

  return str
}
