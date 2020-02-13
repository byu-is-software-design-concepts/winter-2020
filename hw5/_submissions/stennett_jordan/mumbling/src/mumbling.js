export const createMumble = str => {
  // TODO
  if (str === "") return "";

  let ans = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    ans += `-${str[i].toUpperCase()}`;

    for (let j = 0; j < i; j++) {
      ans += `${str[i].toLowerCase()}`;
    }
  }
  return ans;
};
