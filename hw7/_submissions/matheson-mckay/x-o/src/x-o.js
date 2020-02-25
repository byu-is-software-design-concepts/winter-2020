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
  if(x == o){
    return true
  }
  else {return false}
}

