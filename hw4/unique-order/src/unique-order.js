export const uniqueInOrder = str => {
  let arr = [];
  arr = str.split('')
  console.log(arr);

  var uniqueArray = [];

        // Loop through array values
        for(var value of arr){
            if(uniqueArray.indexOf(value) === -1){
                uniqueArray.push(value);
            }
        }
  arr = uniqueArray;

  return arr
}
