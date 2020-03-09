export const createMumble = str => {
  str = str.toLowerCase();
  let string = '';

  if (str === "")
  {
    return string;
  }
  else
  {
    for (let i = 0; i < str.length; i++)
    {
        for (let x = 0; x < i + 1; x++)
        {
        string += str[i];
        }
        
        if (i !== str.length - 1)
        {
        string += "-";
        }
    }

    string = string[0].toUpperCase() + string.substring(1);

    for (let t = 0; t < string.length; t++)
    {
        let indexnum = string.indexOf("-", t) + 1;

        if (indexnum > 0)
        {
        let upperChar = string[indexnum].toUpperCase();
        string = string.substring(0, indexnum) + upperChar + string.substring(indexnum + 1);
        t = indexnum;
        }
    }
    return string;
  }
}
