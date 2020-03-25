export const createMumble = str => {
  // TODO
  let i = 0;
  let mumble = '';
  for(let ch of str) {
    mumble += ch.toUpperCase() + ch.toLowerCase().repeat(i) 
    i++
    if (i < str.length) {
      mumble += '-'
    }
  }
  return mumble
}
