export const uniqueInOrder = str => {
  const regex = /[A-Z]/g;
  const arr = str.match(regex);
  // TODO
  var result = []
  if (arr != null){
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != arr[i-1]){
        result.push((arr[i]))
      }
    }
  }
  return result
  

  
}
