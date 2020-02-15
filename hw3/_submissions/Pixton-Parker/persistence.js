function persistence (num) {
    // Running total count of times you have to multiply
    let totalCount = 0;
    // The number that you are multiplying that was input
    let impNum = num;

    // Conver the input to a string to be broken up, record the length of the string
    let sNum = impNum.toString();
    let sLength = sNum.length();

    // While the length of the number input is longer than 1 digit, run this
    while (sLength > 1)
    {
        // Add to the total count 
        totalCount = totalCount + 1;

        // List to store numbers within num
        let iList = [];

        // Just another counter
        let iCount2 = 1

        //Take the substring of each digit in the number and store it in this arraylist
        for(var iCount = 0; iCount < sLength; iCount++)
        {
            let iNum = sNum.substring(iCount, iCount2);
            iList.push(iNum);
            iCount2 = iCount2 + 1;
        }

        // Multiply each digit in the stored arraylist
        for (iCount = 0; iCount < iList.count();iCount++)
        {
            let newNum = 1
            let thisNum = parseInt(iList[iCount])
            newNum = newNum * thisNum;
        }

        // Take the new multiplied number, convert it to a string and get its length and go again
        impNum = newNum;
        sNum = impNum.toString();
        sLength = sNum.length();
    }

    return totalCount;
}