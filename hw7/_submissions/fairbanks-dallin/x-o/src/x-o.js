export const isXAndOValid = str => {
  str = str.toLowerCase()
  let countX = str.split('x').length - 1
  console.log(str)
  let countO = str.split('o').length - 1

  console.log(countX)
  console.log(countO)

  if (countX === countO){
    return true
  }
  else{
    return false
  }
  
}
