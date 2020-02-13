export const createMumble = str => {
  let iRepeat = 0
  let sMumble = ""

  if (str.length === 0) {
    return str
  }
  let arrStr = str.split("")
  for (let iCount = 0; iCount < str.length; iCount++) {
    sMumble += arrStr[iCount].toUpperCase()
    for (let iCount2 = 0; iCount2 < iRepeat; iCount2++) {
      sMumble += arrStr[iCount].toLowerCase()
    }
    sMumble += "-"
    iRepeat++
  }
  sMumble = sMumble.slice(0, -1)

  return sMumble
};
