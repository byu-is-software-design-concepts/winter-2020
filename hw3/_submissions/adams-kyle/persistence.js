function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num.toString()
    num = num.split("")
    num = num.reduce((x, y) => y * x);
  }
  return i;
  //I initially tried to complete this using a series of loops after initially checking for numbers under 10
  //I found myself caught in neverending loops until working with the reduce funciton

}
  
  ////////////////////////// tests //////////////////////////
  
  let result = persistence(39);
  let expected = 3;
  
  console.log("Testing peristence of 39");
  console.log(`Test passed: ${expected === result}\n`);
  
  result = persistence(4);
  expected = 0;
  
  console.log("Testing peristence of 4");
  console.log(`Test passed: ${expected === result}\n`);
  
  result = persistence(25);
  expected = 2;
  
  console.log("Testing peristence of 25");
  console.log(`Test passed: ${expected === result}\n`);
  
  result = persistence(999);
  expected = 4;
  
  console.log("Testing peristence of 999");
  console.log(`Test passed: ${expected === result}\n`);
  