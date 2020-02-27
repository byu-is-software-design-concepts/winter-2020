export const moveZeroesToEnd = arr => {
  const length = arr.length
  let pushThem = 0
  for( var iCount =0; iCount < arr.length; iCount++){
    if (isNaN((arr[iCount]) )===true){
      delete arr[iCount]
    }
    if ( arr[iCount] ===0 ){
      delete arr[iCount]
      pushThem += 1
    }
    
  }
  arr = arr.filter(function (el) {
    return el != null;
  })

  if (pushThem != 0) {
    for (pushThem; pushThem > 0; pushThem--){
      arr.push(0)
    }
  }
  return arr
}
