export const scramble = (str1, str2) => {
  let str1Arr = str1.split('');
  let str2Arr = str2.split('');
  str1Arr.sort();
  str2Arr.sort();
  let success = true;
  if (str1Arr.length === str2Arr.length)
  {
    for (let i = 0; i < str1Arr.length; ++i)
    {
      if (str1Arr[i] === str2Arr[i])
      {
        continue;
      }
      else 
      {
        success = false;
        break;
      }
    }
  }
  else if (str1Arr.length < str2Arr.length)
  {
    for (let i = 0; i < str1Arr.length; ++i)
    {
      let thisLetter = false;
      for (let j = 0; j < str2Arr.length; ++j)
      {
        if (str1Arr[i] === str2Arr[j])
        {
          thisLetter = true;
        }
      }
      if (!thisLetter)
      {
        success = false;
        break;
      }
    }
  }
  else 
  {
    for (let i = 0; i < str2Arr.length; ++i)
    {
      let thisLetter = false;
      for (let j = 0; j < str1Arr.length; ++j)
      {
        if (str2Arr[i] === str1Arr[j])
        {
          thisLetter = true;
        }
      }
      if (!thisLetter)
      {
        success = false;
        break;
      }
    }
  }
  return success
}
