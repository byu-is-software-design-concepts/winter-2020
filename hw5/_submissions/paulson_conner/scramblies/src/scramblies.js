const scramble = (str1, str2) => {
  let result = false;
  let numMatches = 0;

  if (str1 === '' || str2 === '') {
    result = true;
  }

  for (let i = 0; i < str2.length; i++) {
    if (str1.includes(str2.charAt(i)) === true) {
      numMatches++;
    }

    result = (numMatches >= str2.length);
  }

  return result;
};

module.exports = {
  scramble
};
