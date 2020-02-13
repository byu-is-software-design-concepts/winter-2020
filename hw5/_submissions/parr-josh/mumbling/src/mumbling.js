export const createMumble = str => {
  // TODO
  const letters = str.toLowerCase().split("");
  let solution = [];

  //Create the New Array
  for (let i = 0; i < letters.length; i++) {
    solution.push(letters[i].repeat(i + 1));
  }

  //Capitalize First letter w/ Regex & Mapping
  solution = solution.map(str =>
    str.replace(/\b\w/g, letter => letter.toUpperCase())
  );

  //Join with -
  return solution.join("-");
};

console.log(createMumble("Tom"));
