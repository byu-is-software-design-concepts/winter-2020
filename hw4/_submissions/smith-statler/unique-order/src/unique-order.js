export const uniqueInOrder = str => {
  let arr = []
  //Split the string into letters
  let newArr = str.split('');
  for(let i = 0; i < newArr.length; i++){
    if(!arr.includes(newArr[i])){
      arr.push(newArr[i])
    }
  }
  return arr
}
