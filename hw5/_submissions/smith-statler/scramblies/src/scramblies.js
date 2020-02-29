export const scramble = (str1, str2) => {
  let found = false
  let arr = [] //This array will keep track of whether or not a letter was found.
  //if the character is in the string, keep it true. If it's not, don't.
  for(let i = 0; i < str2.length; i++){//for each letter in the correct word
    for(let j = 0; j < str1.length; j++){//check against each letter in the scrambled word
      if(str2.charAt(i) === str1.charAt(j)){
        found = true//if the letter was found, push true on to the array.
      }
    }
    arr.push(found);
    found = false
  }

  for(let i = 0; i < arr.length; i++){
    if(arr[i] === false){
      return false//if the array contains any falses, one of the letters was not found. Therefore, the match is incomplete.
    }
  }

  return true
}
