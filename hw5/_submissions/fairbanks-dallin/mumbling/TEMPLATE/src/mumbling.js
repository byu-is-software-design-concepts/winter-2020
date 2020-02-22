export const createMumble = str => {
  let letter = "";
  let mumble = "";
  
  for (let i = 0; i < str.length; i++)
  {
    letter = str.substring(i, i + 1);
    mumble = mumble.concat(letter.toUpperCase());
    for(let j = 0; j < i; j++)
    {
      mumble = mumble.concat(letter.toLowerCase());
    }
    if (i === (str.length - 1))
    {
      break;
    }
    mumble = mumble.concat("-");
  }
  return mumble;
}
