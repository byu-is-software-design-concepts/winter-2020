export const moveZeroesToEnd = arr => {
    //Yay I did it!
    let pos;
    let iCount = 0;

    for (pos of arr) {

        if (arr[iCount] == 0) {

            arr.splice(iCount, 1)
            arr.push(0)

        }

        iCount++
    }


  return arr
}
