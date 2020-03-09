export const uniqueInOrder = str => {
  let arr = str.split(''); // Convert input string to array
  let result = [];

  if(arr.length > 1){    
    for(var index = 0; index < arr.length; index++) {
      let currentLetter = arr[index];
      let nextLetter = arr[index + 1];

      // Add the letter to the result array if the letter is not a duplicate
      if(currentLetter != nextLetter && result.includes(currentLetter) == false){
        result.push(currentLetter);
      }
    }
  }

  return result
}
