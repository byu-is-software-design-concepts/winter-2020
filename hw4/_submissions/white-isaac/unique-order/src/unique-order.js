export const uniqueInOrder = str => {
  let arr = [];
  let origArr = str.split("");
  let lastChar = "";

  origArr.forEach( (chr) => {
    if (chr !== lastChar) {
        arr.push(chr);
        lastChar = chr;
    }
  });

  return arr;
}
