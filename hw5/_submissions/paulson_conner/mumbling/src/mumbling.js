const createMumble = str => {
  const arr = str.split('');
  const newArr = arr.map((letter, index) => {
    let newStr = letter.toUpperCase();
    while (newStr.length < index + 1) {
      newStr = newStr.concat(letter.toLowerCase());
    }
    if (index !== arr.length - 1) {
      newStr = newStr.concat('-');
    }
    return newStr;
  });
  return newArr.join('');
};

module.exports = {
  createMumble
};
