export const spinWords = sentence => {
  // TODO
  var array = sentence.split(" ");
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= 5) {
      array[i] = array[i].split("").reverse().join("");
    }
  }
  return array.join().replace(/,/g," ");
}
