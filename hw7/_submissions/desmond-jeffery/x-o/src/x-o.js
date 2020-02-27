export const isXAndOValid = str => {
    str.split()
    let flag = false
    let iCount = 0
    let oCount = 0

    for (let s of str) {
        if (s == "x") {
            iCount += 1
        }
        else if (s == "o") {
            oCount += 1
        }

    }
    if (iCount == oCount) {
        flag = true
    }
  return flag
}
