export const scramble = (str1, str2) => {
  for (let i = 0; i < str2.length; i++)
  {
    for (let x = 0; x < str1.length; x++)
    {
      if (str2[i] === str1[x])
      {
        let var2 = str2[i]
        let var1 = str1[x]
        str2 = str2.replace(var2,'');
        str1 = str1.replace(var1, '');
        x -= 1;
        i -= 1;
      }
    }
  }

  if (str2 === "")
  {
    return true
  }
  else
  {
    return false
  }
}

