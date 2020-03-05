export const isXAndOValid = str => {
  str = str.split('')
  let x = []
  let o = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'x') {
      x.push(str.slice(i,i))
    } else if (str[i] == 'o') {
      o.push(str.slice(i,i))
    }
  }

  if (x.length == o.length) {
    return true
  } else {
    return false
  }
}
