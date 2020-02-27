export const isXAndOValid = str => {
  const exes = [];
  const owes = [];

  str.split('').forEach(c => {
    if (c === 'x') {
      exes.push(c);
    }

    if (c === 'o') {
      owes.push(c);
    }
  });

  return exes.length === owes.length;
}
