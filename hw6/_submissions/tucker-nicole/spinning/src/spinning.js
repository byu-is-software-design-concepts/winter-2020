export const spinWords = sentence => {
  let array = sentence.split(' ');
  let backwards = '';
  let letters = [];

  array.forEach(function (item, index) {
    if (item.length > 4) {
      letters = item.split('');
      letters = letters.reverse();
      item = letters.join('');
    }
    backwards += item + ' ';
  })

  backwards = backwards.trim();

  return backwards
}