export const moveZeroesToEnd = arr => {
  for(let x of arr){
    if(x == 0){
      let indZ = arr.indexOf(x)
      arr.splice(indZ, 1)
      arr.push(0)
    }  
  }
  return arr
}

// ## Instructions

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// - For example:
//   - `[false,1,0,1,2,0,1,3,"a"]` should return `[false,1,1,2,1,3,"a",0,0]`
