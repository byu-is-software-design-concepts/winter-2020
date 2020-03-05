export const createMumble = str => {
  
  let mumblestr = "";
  let i = 1
  let positive = 1;
  let check = true;
  for(let c of str)
  {
    for(i; i <= pos; i++){
      if(check){
        mumblestr += c.toUpperCase();
        check=false;
      }
      else{
        mumblestr += c
      }
      
    }
    if(pos !== str.length)
    {
      mumblestr += "-";
    }
    
    check = true;
    positive++;
    i = 1;
  };

  return mumblestr;
}
