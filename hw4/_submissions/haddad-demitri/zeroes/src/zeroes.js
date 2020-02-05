export const moveZeroesToEnd = arr => {
  let arrHolder = [];

  for (let i = 0; i < arr.length; i++){
    if(Number(arr[i])===0){
      arr.splice(i,1)
      arrHolder.push(0)
    }
  }

  arr = arr.concat(arrHolder)
  return arr
}
