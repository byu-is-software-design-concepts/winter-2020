import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
  it('should return nothing for an empty string', () => {
    const result = uniqueInOrder('')
    const expected = []

    expect(result).toEqual(expected)
  })
  it('should work with duplicated letters', () => {
    const result = uniqueInOrder('AABBC')
    const expected = ['A', 'B', 'C']

    expect(result).toEqual(expected)
  })
  test('should work with one duplicated letter', () => {
    const result = uniqueInOrder('AAAAAAAAAAAAAAA')
    const expected = ['A']

    expect(result).toEqual(expected)
  })
  test('should work with complicated duplicated letters', () => {
    const result = uniqueInOrder('AAbbaabacdddssw')
    const expected = ['A', 'b', 'a', 'b', 'a', 'c', 'd', 's']

    expect(result).toEqual(expected)
  })
})
