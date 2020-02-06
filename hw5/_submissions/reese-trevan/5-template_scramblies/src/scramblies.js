export const scramble = (str1, str2) => {
  // TODO
  let characters1 = str1.split('');
  let characters2 = str2.split('');
  var j = [];
  var y = [];
  for (var i = 0; i < characters1.length; i++) {
    if (characters2.includes(characters1[i]) && !j.includes(characters1[i])) {
      j.push(characters1[i]);
      if (j.length == characters2.length) {
        return true
      }
    }
  }
  return false
}
