export const uniqueInOrder = str => {
    let arr = []
    let string = str.split("");
    let arrPosition = 0;
    let letterCount = 0;
    let letter;

    for (letter of string) {

        if (letterCount == 0 || string[letterCount] != string[letterCount - 1]) {
            arr[arrPosition] = string[letterCount];
            arrPosition = arrPosition + 1;
            
        }
        letterCount = letterCount + 1;
        

    }


  return arr
}
