export const moveZeroesToEnd = arr => {
  let counter = 0;

  arr.forEach(element => {
    if(element === 0){
      arr.splice(arr.indexOf(element), 1);
      arr.push(0)
    }
  });


  return arr
}
