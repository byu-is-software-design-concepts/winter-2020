export const isXAndOValid = str => {
  // TODO
  let x = 0;
  let o = 0;
  str.split("").forEach(letter => {
    if (letter === 'x' || letter === 'X'){
      x += 1;
    }
    else if (letter === 'O' || letter === 'o'){
      o += 1;
    }
  })
  if (x === o){
    return true;
  }
  return false;
}