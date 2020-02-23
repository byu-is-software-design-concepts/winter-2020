export const createMumble = str => {
  str = str.toLowerCase();
  let finalstring = '';
  for(let x in str){
    let char = str.charAt(x)
    finalstring += char.toUpperCase() + char.repeat(x) + '-';
  }
  return finalstring.slice(0, -1)
}
