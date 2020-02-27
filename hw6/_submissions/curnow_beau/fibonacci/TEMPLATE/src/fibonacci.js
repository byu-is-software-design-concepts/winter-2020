export const getFibNumber = steps => {
  let a = 0; let b = 1; 
  let f;

  if(steps === 0){
     f = 0;
  }
  else{
     f = 1;
  }
  for (let i = 2; i <= steps; i++){
      f = a + b;
      a = b;
      b = f;
  }   
  steps = f;

  return steps
}


  


