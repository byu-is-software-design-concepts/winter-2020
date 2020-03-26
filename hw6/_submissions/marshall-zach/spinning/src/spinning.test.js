import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  it('should work with one word', () =>{
    const result = spinWords('Words')
    const expected = 'sdroW'

    expect(result).toEqual(expected)
  })
  it('should work with words of different lengths', () =>{
    const result = spinWords('Stop Spinning My Words')
    const expected = 'Stop gninnipS My sdroW'

    expect(result).toEqual(expected)
  })
})
/*
Write a function `spinWords(sentence)` that takes in a string of one or more words, and returns the same string, 
  but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. 
Spaces will be included only when more than one word is present.

- For example:
  - `""` should return `""`
*/