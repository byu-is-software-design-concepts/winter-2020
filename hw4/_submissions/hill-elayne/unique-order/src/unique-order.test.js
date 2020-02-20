import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })
  it('should return the same string if no duplicates', () => {
    const result = uniqueInOrder('ABC')
    const expected = ['A', 'B', 'C']

    expect(result).toEqual(expected)
  })
  it('should return duped string w/o dupes', () => {
    const result = uniqueInOrder('AABBCC')
    const expected = ['A', 'B', 'C']

    expect(result).toEqual(expected)
  })
  it('should repeat letters if not subsequent', () => {
    const result = uniqueInOrder('AABBCCAA')
    const expected = ['A', 'B', 'C', 'A']

    expect(result).toEqual(expected)
  })
  it('should work with longer strings', () => {
    const result = uniqueInOrder('AABBCCAAFFGWWWWWWWWBBBA')
    const expected = ['A', 'B', 'C', 'A', 'F', 'G', 'W', 'B', 'A']

    expect(result).toEqual(expected)
  })
})
