export const createMumble = str => {
  // TODO
  let characters = str.split('');
  var str = "";
  for (var i = 0; i < characters.length; i++) {
    if (i != 0) {
      str += "-";
    }
    str += characters[i].toUpperCase();
    if (i > 0) {
      var count = (characters[i].length*i);
      for (var j = 0; j < count; j++) {
        str += characters[i].toLowerCase();
      }
    }
  }
  return str
}
