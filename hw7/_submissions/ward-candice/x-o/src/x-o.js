export const isXAndOValid = str => {
  let charmap = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x" || str[i] === "o") {
      if (charmap[str[i]]) {
        charmap[str[i]] += 1;
      } else {
        charmap[str[i]] = 1;
      }
    }
  }

  if (charmap["o"] && charmap["x"] && charmap["o"] === charmap["x"]) {
    return true;
  }

  return false;
}
