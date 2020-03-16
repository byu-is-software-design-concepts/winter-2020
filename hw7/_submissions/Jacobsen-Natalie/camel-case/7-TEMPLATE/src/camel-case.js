export const convertToCamelCase = str => {
  str = str.toLowerCase();
  let array = str.split(" ");
  let newarray = [array[0]];

  for (let i = 1; i < array.length; i++)
  {
      let word = array[i];
      let firstletter = word.charAt(0).toUpperCase();
      let remainder = word.slice(1);
      word = firstletter + remainder;
      newarray.push(word);
  }

  str = newarray.join('');
  return str;
}
