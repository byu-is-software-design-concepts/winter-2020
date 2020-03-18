export const isXAndOValid = str => {
  str = str.toLowerCase();
  let count_o = 0;
  let count_x = 0;

  for (let i = 0; i < str.length; i++)
  {
      if (str[i] === 'o')
      {
      count_o += 1;
      }
      else if (str[i] === 'x')
      {
      count_x += 1;
      }
  }

  if (count_o === count_x)
  {
       return true;
  }
  else
  {
      return false;
  }
}
