class StringCalculator {
    Add(nums) {
        if (nums == '') {
            nums = 0
        }
        else if (nums.includes(',')) {
            let arrayOfNums;
            arrayOfNums = nums.split(",");
            arrayOfNums = arrayOfNums.map(Number);

            nums = 0;

            for (let i = 0; i < arrayOfNums.length; i++) {
                nums += arrayOfNums[i];
            }
        }

        else {
            nums = parseInt(nums)
        }

        return nums
    }
}

////////////////////////// tests //////////////////////////
stringCalc = new StringCalculator()

let result = stringCalc.Add('')
let expected = 0

console.log('Testing adding no numbers')
console.log(`Test passed: ${expected === result}`)
console.log('')

result = stringCalc.Add('1')
expected = 1

console.log('Testing adding 1 number')
console.log(`Test passed: ${expected === result}`)
console.log('')

result = stringCalc.Add('1,2')
expected = 3

console.log('Testing adding 2 numbers')
console.log(`Test passed: ${expected === result}`)
console.log('')