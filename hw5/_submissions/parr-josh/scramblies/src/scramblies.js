export const scramble = (str1, str2) => {
  // TODO
  let result = "";

  const s1 = str1
    .toLowerCase()
    .split("")
    .sort();

  const s2 = str2
    .toLowerCase()
    .split("")
    .sort();

  //console.log(s1);
  //console.log(s2);

  let i = 0;
  let x = 0;

  if (s1.length < s2.length) return false;

  for (x = 0; i < s2.length && x <= s2.length; x++) {
    if (s2[i] === s1[x]) {
      i++;
    }
  }

  if (x <= s1.length) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

scramble("abcdefg", "asdgefgcbwedgas");
