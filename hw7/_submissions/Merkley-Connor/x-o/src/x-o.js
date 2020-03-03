export const isXAndOValid = str => {
  let arr = []
  arr = str.split('')
  let x = 0
  let o = 0
  for(let y of arr){
    if(y == 'x'){
      x++;
    }
    if(y == 'o'){
      o++;
    }
  }
  if(x % 2 == 0 && o % 2 == 0){
    return true
  }
  else {return false}
}