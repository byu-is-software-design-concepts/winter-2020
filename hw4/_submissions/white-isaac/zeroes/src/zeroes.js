export const moveZeroesToEnd = arr => {
    let countZeros = 0;
    for (let i = 0; i < arr.length - countZeros; i += 1) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
            i -= 1;
            countZeros += 1;
        }
    }
    return arr
}
