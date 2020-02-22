export const uniqueInOrder = str => {
    let arr = str.split('');
    return arr.filter((a, b) => arr.indexOf(a) === b)
};