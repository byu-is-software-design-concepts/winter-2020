export const isXAndOValid = str => {
  // TODO
  const strSplit = str.split("")
  let Xs = 0
  let Os = 0

  for (let count = 0; count < strSplit.length; count++) {
    if (strSplit[count] == 'x') {
      Xs++
    }
    else if (strSplit[count] == 'o') {
      Os++
    }
  }

  if (Xs == Os) {
    return true
  }
  else {
    return false
  }
}
