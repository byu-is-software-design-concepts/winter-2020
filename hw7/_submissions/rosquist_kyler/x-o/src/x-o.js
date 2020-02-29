export const isXAndOValid = str => {
  //count should equal 0 if there is an equal amount of x's and o's
  let count = 0;

  for (let i = 0; i < str.length; i++) {

    if (str[i] === 'x') {
      count++;
    } else if (str[i] === 'o') {
      count--;
    }

  }

  // when count equals 0, return true
  return !count;
}
