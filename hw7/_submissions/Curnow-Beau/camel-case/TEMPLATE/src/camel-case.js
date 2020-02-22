export const convertToCamelCase = str => {
  str.toLowerCase();
  let sarray = str.split(" ");

  for(let i = 0; i < sarray.length; i++){
    if(i > 0){
      sarray[i] = sarray[i].charAt(0).toUpperCase() + sarray[i].substring(1);
    }
  } 

  str = sarray.join('');
  
  return str
}
