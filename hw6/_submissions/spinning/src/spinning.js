export const spinWords = sentence => {
  let arr = sentence.split(' ')

  for (let i = 0; i < arr.length; i++){
    if (arr[i].length >= 5){
      arr[i] = arr[i].split("").reverse().join("")
    }
  }
  
  let final = arr.join(" ")
  return final
}
