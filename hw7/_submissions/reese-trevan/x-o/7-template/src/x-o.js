export const isXAndOValid = str => {
  // TODO
  let count = 0
  str.split("").forEach(letter => {
    if (letter === 'x' || letter === 'X'){
      count += 1;
    }
    else if (letter === 'O' || letter === 'o'){
      count -= 1;
    }
  })
  if (count === 0){
    return true;
  }
  return false;
}