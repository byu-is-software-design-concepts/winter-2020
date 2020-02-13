export const createMumble = str => {
  let finalStr = "";
  for (let i = 0; i < str.length; ++i)
  {
    finalStr = finalStr.concat(str.charAt(i).toUpperCase());
    for (let j = 0; j < i; ++j)
    {
      finalStr = finalStr.concat(str.charAt(i).toLowerCase());
    }
    if (i != str.length - 1)
    {
      finalStr = finalStr.concat('-');
    }
  }
  return finalStr
}
