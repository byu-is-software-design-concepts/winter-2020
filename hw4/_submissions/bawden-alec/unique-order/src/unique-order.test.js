import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })

  it('returns an array element', () => {
    const result = uniqueInOrder('test')
    const expected = []

    expect(typeof(result)).toEqual(typeof(expected))
  })
  
  it('no duplicates next to each other', () => {
    const result = uniqueInOrder('AAABBBCCCDDDAAA')
    const expected = ['A','B','C','D','A']

    expect(result).toEqual(expected)
  })
})


