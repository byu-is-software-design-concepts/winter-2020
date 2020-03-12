export const convertToCamelCase = str => {

  str.toLowerCase();
  let camelArray = str.split(" ");

  for(let i = 0; camelArray.length > i; i++)
  {
    if(i !== 0)
    {
      camelArray[i] = camelArray[i].charAt(0).toUpperCase() + camelArray[i].substring(1);
    }
  }
  str = camelArray.join("");

  return str
}
