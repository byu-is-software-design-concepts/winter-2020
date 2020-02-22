export const moveZeroesToEnd = arr => {  
  let addZeroes = []
  for(let i = 0; i < arr.length; i++){
    while(arr[i] === 0){
        arr.splice(i, 1)
        addZeroes.push(0)        
    }
  }
  
  return arr.concat(addZeroes)
}
