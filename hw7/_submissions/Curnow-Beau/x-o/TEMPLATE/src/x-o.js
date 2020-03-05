export const isXAndOValid = str => {
  let x = 0;
  let o = 0;

  [...str].forEach(element => {
    if(element === "x"){
      x++;
    }
    if(element ==="o"){
      o++;
    }
  });

  if(x === o){
    return true
  }

  else{
    return false
  }

}
