import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })
  it('return a list of three items when passed ABC', () => {
    const result = uniqueInOrder('ABC')
    const expected = ['A','B','C']
  })
  it('return a list of three items when passed AABBCCCC', () => {
    const result = uniqueInOrder('AABBCCCC')
    const expected = ['A','B','C']
  })
})
