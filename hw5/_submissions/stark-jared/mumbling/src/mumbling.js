export const createMumble = str => {
  let output = "";
  str = [...str];
  str.forEach((letter, idx) => {
    output += letter.toUpperCase();
    for (let x = 0; x < idx; x++) output += letter.toLowerCase();
    if (idx < str.length - 1) output += "-";
  });

  return output;
};
