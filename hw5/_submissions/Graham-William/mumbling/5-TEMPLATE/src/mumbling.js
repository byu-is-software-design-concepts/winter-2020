export const createMumble = str => {
  let myArray = str.split("");
  let myString = [];
  let mycount = 1;
  
  for(let i=0; i<myArray.length; i++) {
    let letter = myArray[i].toUpperCase()
    myString.push(letter);
      for(let k=0; k<mycount - 1; k++) {
        myString.push(myArray[i].toLowerCase());
      }
      if(i != myArray.length - 1) {
        myString.push("-");
      }
    mycount++;
  }

  str = myString.join("");

  return str
}
