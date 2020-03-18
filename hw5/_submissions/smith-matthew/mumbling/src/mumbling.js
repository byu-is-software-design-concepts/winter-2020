export const createMumble = str => {
  let mumble = ""

  for (let i = 0; i < str.length; i++) {
    if (mumble === "") {
      mumble += mumbleHelper(str[i], i)
    } else {
      mumble = mumble + "-" + mumbleHelper(str[i], i)
    }
  }

  return mumble
}

function mumbleHelper(char, index) {
  let result = "";
  for (let i = 0; i < index + 1; i++) {
    if (i === 0) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
  }
  return result
}
