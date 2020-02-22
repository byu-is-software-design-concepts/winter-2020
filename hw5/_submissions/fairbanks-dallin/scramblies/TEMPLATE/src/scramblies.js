export const scramble = (str1, str2) => {
  for (let i = 0; i < str2.length; i++)
  {
    let char = str2.substring(i, i + 1)
    if (!str1.includes(char))
    {
      return false;
    }
  }
  return true;
}
