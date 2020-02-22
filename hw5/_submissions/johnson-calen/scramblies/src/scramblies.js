export const scramble = (str1, str2) => {
  let match = true;

  for(let count = 0; str2.length > count; count++) 
  {
    if(str1.indexOf(str2[count]) > -1)
    {
      str1 = str1.replace(str2[count], '');
    }

    else
    {
      match = false;
    }

  }
  return match
}

