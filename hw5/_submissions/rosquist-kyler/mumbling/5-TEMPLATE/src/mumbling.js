export const createMumble = str => {
  if (str === undefined) throw new Error("createMumble() takes one argument of type string.");
  // Doesn't work if the contents of str aren't letters
  return mumbleRecursive(str.toLowerCase(), 1);
}

const mumbleRecursive = (str, repeatNum) => {
  // first letter is always uppercase
  let mumble = str.charAt(0).toUpperCase();

  //append the same letters but lowercase
  for (let i = 1; i < repeatNum; i++) {
    mumble += str.charAt(0);
  }

  // recurse until the string is of length 1
  return str.length > 1 ?
         `${mumble}-${mumbleRecursive( str.slice(1, str.length+repeatNum-1), ++repeatNum )}` :
         mumble;
}