// After carefully reading through the question I realised that
// I could use a brute force method by having it break the number
// into strings that I could then caulcaute into single digits

class Persistence {
    Calc(nums) {
        let parsed;
        let newNum;
        let stringNum;
        let checkString
        let firstpass = 0;
        let loops = 0
        let total = 0;
        //Checks to see if blank

        checkString = nums.toString()
        if (nums == '') {
            return 0
        }
           // console.log("Console length" + checkString.length) 
            while (checkString.length > 1) {
               // console.log(checkString.length)
                if (firstpass == 0) {
                    stringNum = nums.toString()
                    firstpass = 1
                   // console.log("Is this working")
                }
                else {
                    stringNum = total.toString()
                   // console.log(stringNum)
                }
                //Splits the string up using commas
                parsed = stringNum.split("")
               // console.log(parsed)
                //Turns split strings into ints and adds them
                total = 0
                for (let i = 0; i < parsed.length; ++i) {
                    if (i == 0) {
                        total = parseInt(parsed[i])
                    }
                    else {
                        newNum = parseInt(parsed[i])
                        total = total * newNum
                       // console.log(newNum)
                       // console.log(total)
                    }
                }
              checkString = total.toString()
              loops = loops +1;
             // console.log("This is how many passes" + loops)
            }
            
       // console.log(total)
        return loops
    }

}

Persistence = new Persistence()

let result = Persistence.Calc('')
let expected = 0

console.log('Testing adding no numbers')
console.log(`Test passed: ${expected === result}`)
console.log('')

result = Persistence.Calc(39)
expected = 3

console.log()
console.log(`Test passed: ${expected === result}`)
console.log('')

result = Persistence.Calc(999)
expected = 4

console.log()
console.log(`Test passed: ${expected === result}`)
console.log('')