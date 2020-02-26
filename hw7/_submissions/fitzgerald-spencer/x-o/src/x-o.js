export const isXAndOValid = str => {
    let xCount = 0;
    let oCount = 0;
    let input = str.split('');
    
    input.forEach(letter => {
        if (letter === "x" || letter === "X") {
            xCount++;
        } else if (letter === "o" || letter === "O") {
            oCount++;
        }
    });

    if (xCount === oCount) {
        return true;
    } else {
        return false;
    }

}
