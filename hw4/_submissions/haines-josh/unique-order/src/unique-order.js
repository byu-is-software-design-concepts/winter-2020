export const uniqueInOrder = str => {
  let arr = []
  // let str = 'aabbc'
  str = str.split("")
  str.forEach(i => console.log(i))
  // TODO
  for (let i = 0; i < str.length; i++){
    if (str[i] === str[i + 1]){
      str.splice(i,1);
    }
  }
  //console.log(str)
  arr = str
 return arr
}
