//brute force
function persistence(num) {
  let times = 0;
  while (num.toString().length > 1){
    times++;
    let numArray = [];
    //console.log(num.toString().length)
    for (let i = 0; i < num.toString().length; i++)
    {
      //console.log(i);
      numArray.push(Number(num.toString().substring(i, i + 1)));
    }
    //console.log(numArray);
    let newNum = 0;

    for (let i = 0; i < numArray.length; i++)
    {
      if(i == 0)
      {
        newNum = numArray[i];
      }
      else
      {
        newNum = newNum * numArray[i];
      }
    }
    console.log(newNum.toString())
    num = newNum;
  }
  return times;
}

//Streamlined solution
function persistence(num) {
  for (let i = 0; num > 9; i++) {
    num = num.toString().split("").reduce((t, c) => c * t);
  }
  return i;
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
