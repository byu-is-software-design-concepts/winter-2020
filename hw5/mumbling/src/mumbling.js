export const createMumble = str => {
  let characters = str.split('');
  let mumble = ''
  let count = 1
  characters.forEach(function (item, index) {
    for (let x = 0; x < count; x++) {
      if (x == 0) {
        mumble += item.toUpperCase()
      } else {
        mumble += item.toLowerCase()
      }
    }
    if (characters.length != count) {
      mumble += '-';
    }
    count++;
  })
  return mumble
}