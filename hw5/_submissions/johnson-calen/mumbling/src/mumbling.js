export const createMumble = str => {
  let strArray = str.split("");
  let strOut = "";
  let counter = 0;

  for(let i = 0; strArray.length > i; i++) {
    let strHolder =
    strOut = strOut + str.charAt(i).toUpperCase();
    for(let j = 0; counter > j; j++ ) {

      strOut= strOut + str.charAt(i).toLowerCase();

    } 
    counter++
    strOut = strOut + "-"
  }
  strOut = strOut.substring(0, strOut.length - 1);
  return strOut
}
