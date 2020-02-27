export const isXAndOValid = str => {
  let arr = str.split('');
  let x = 0;
  let o = 0;

  arr.forEach(element => {
    element = element.toLowerCase();
    if (element == 'x') {
      x++
    } else if (element == 'o') {
      o++
    }
  });
  if (x == o) {
    return true
  }
  return false
}