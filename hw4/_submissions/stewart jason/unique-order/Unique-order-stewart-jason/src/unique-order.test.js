import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []
    console.log(result)
    console.log(expected)

    expect(result).toEqual(expected)
  })
  it('should work with duplicated letters', () => {
    const result = uniqueInOrder('AABBC')
    const expected = ['A', 'B', 'C']
    console.log(result)
    console.log(expected)

    expect(result).toEqual(expected)
  })
  it('should work with duplicated letters', () => {
    const result = uniqueInOrder('AABBC')
    const expected = ['A', 'B', 'C']
    console.log(result)
    console.log(expected)

    expect(result).toEqual(expected)
  })
  it('Ignore numbers, keep with dups', () => {
    const result = uniqueInOrder('AA11BBC')
    const expected = ['A', 'B', 'C']
    console.log(result)
    console.log(expected)

    expect(result).toEqual(expected)
  })
  it('Ignore numbers, keep with dups and repeats', () => {
    const result = uniqueInOrder('AA11BB44CAA')
    const expected = ['A', 'B', 'C', 'A']
    console.log(result)
    console.log(expected)

    expect(result).toEqual(expected)
  })
  it('Ignore numbers, keep with dups and repeats and accounts for spaces', () => {
    const result = uniqueInOrder('AA11BB44 CAA')
    const expected = ['A', 'B', 'C', 'A']
    console.log("extra space")
    console.log(result)
    console.log(expected)

    expect(result).toEqual(expected)
  })
})
