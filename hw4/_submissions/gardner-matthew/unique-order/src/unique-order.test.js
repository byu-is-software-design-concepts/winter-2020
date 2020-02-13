import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })
  
  it('should return ABC for AAABBBCCC', () => {
    const result = uniqueInOrder('AAABBBCCC')
    const expected = ['A', 'B', 'C']
  })
  
  it('should return ABC for ABC', () => {
    const result = uniqueInOrder('ABC')
    const expected = ['A', 'B', 'C']
  })
})
