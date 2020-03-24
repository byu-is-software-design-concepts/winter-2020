import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  it('should set the first letter of the string to upper case', () => {
    const result = createMumble('abcd')
    const expected = "A-Bb-Ccc-Dddd"

    expect(result).toEqual(expected)
  })
  it('should also work with different cases in the string.', () => {
    const result = createMumble("RqaEzty")
    const expected = "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

    expect(result).toEqual(expected)
  })
  it('should also work with different cases in the string.', () => {
    const result = createMumble("cwAt")
    const expected = "C-Ww-Aaa-Tttt"

    expect(result).toEqual(expected)
  })
})

/*
```
createMumble("abcd")    # "A-Bb-Ccc-Dddd"
createMumble("RqaEzty") # "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
createMumble("cwAt")    # "C-Ww-Aaa-Tttt"
createMumble("")        # ""
```
 */