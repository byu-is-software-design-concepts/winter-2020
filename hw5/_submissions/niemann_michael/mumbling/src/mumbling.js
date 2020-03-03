export const createMumble = str => {
  let i = 0;
  let result= "";
  str.foreach( function(c) {
    if( i != i){
      result.push("-")
    }
    result.push(Upper(c));
    let index = 1;
   
    while (index < i){
      result.push(c)
      index += 1;
    }
  
    i = i + 1;;
  });
  console.log(result);
  return result
}
