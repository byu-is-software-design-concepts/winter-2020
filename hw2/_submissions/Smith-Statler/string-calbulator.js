class StringCalculator {
    Add(nums) {
        var res = nums.split("");
        var total = 0;
        for (var iCount = 0; iCount < res.length; iCount++) {
            if (!isNaN(parseInt(res[iCount]))) {
                total += parseInt(res[iCount])
            }
        }
        return total
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
