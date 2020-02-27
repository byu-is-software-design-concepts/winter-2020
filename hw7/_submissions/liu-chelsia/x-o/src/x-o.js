export const isXAndOValid = str => {
  var input = str.toLowerCase().split("");
  var xCount = 0;
  var oCount = 0;
  var result = false;

  if(str != ""){
    for(let i = 0; i < input.length; i++){
      if(input[i] == "x"){
        xCount++;
      }
      else if(input[i] == "o"){
        oCount++
      }
    }
  
    if(xCount == oCount){
      result = true;
    }
  }

  return result;
}
