export const scramble = (str1, str2) => {
<<<<<<< HEAD:hw5/_submissions/drean-patrik/scramblies/src/scramblies.js
  // TODO
  return undefined
}
=======
  let v = 0;
  for(let x in str1){
    let n = str2.charAt(x)
    if(str1.includes(n)){
      v = v;
    }
    else {v++;}
  }
  return (v > 0 ? false : true)
}
>>>>>>> holle-tanner:hw5/scramblies/5-TEMPLATE/src/scramblies.js
