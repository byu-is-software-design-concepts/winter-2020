export const createMumble = str => {
  var mum = ""
  for (var i = 1; i < str.length + 1; i++) {
    var strToAdd = str.charAt(i-1).repeat(i)
    strToAdd = strToAdd.toLowerCase()
    strToAdd = strToAdd.charAt(0).toUpperCase() + strToAdd.substring(1) + '-'
    mum += strToAdd
  }
  mum = mum.slice(0,-1)
  return mum
}