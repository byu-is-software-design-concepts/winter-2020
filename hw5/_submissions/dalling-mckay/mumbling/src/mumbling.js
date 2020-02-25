export const createMumble = str => {
  // TODO
  let mumble = ""
  for (let i = 0; i <= str.length; i++) {
    for (let j = 0; j <= i; j++ ) { 
      mumble += str.charAt(i)
    }
  }
  return mumble
}
