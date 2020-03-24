export const isXAndOValid = str => {
  var array = str.split("")
  var count = 0
  for (let index = 0; index < array.length; index++) {
    if (array[index]==="x") {
      count+=1
    }
    if (array[index]==="o") {
      count-=1
    }
  }

  if (count===0) {
    return true
  }
  
  return false

}
