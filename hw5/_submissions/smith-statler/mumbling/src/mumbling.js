export const createMumble = str => {

  let arr = str.split("");
  let newStr = "";
  let j = 0;
  for(let i = 0; i < arr.length; i++){
    j = i;
    newStr += arr[i].toUpperCase();
    while(j > 0){
      newStr += arr[i].toLowerCase()
      j--
    }
    if(arr[i+1] != null){
      newStr += "-";
    }
  }

  return newStr
}

/*
```
createMumble("abcd")    # "A-Bb-Ccc-Dddd"
createMumble("RqaEzty") # "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
createMumble("cwAt")    # "C-Ww-Aaa-Tttt"
createMumble("")        # ""
```
 */