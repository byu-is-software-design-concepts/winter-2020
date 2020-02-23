export const scramble = (str1, str2) => {
  // If str1 is shorter than str2, evaluate to false.
  if(str1.length < str2.length) {
    return false
  }

  // Start the tracking object
  const letters = {
    a: 0,
    b: 0, 
    c: 0,
    d: 0,
    e: 0, 
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  }

  // Ignore case.
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  // Loop over str2, check if str1 contains it and any/all duplicate letters.
  for(let ch of str2) {
    // Check if character is included as well as duplicates.
    letters[ch]++
    if(!(str1.split(ch).length - 1 >= letters[ch])) {
      return false
    }
  }

  return true
}
