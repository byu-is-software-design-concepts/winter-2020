import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })
  // TODO: Write more tests
  it('should return false on non-equal x and o strings', () => {
    const result = isXAndOValid('xoxx')
    const expected = false

    expect(result).toEqual(expected)
  })

  it('return false due to non matching case', () => {
    const result = isXAndOValid('xXoo')
    const expected = false

    expect(result).toEqual(expected)
  })

  it('should return true on long mixed strings', () => {
    const result = isXAndOValid('xasdfgdfasgxdfhthftjfthjgkodfjdyjdyjofgjdyjftyj')
    const expected = true

    expect(result).toEqual(expected)
  })

  it('should return false on long mixed strings', () => {
    const result = isXAndOValid('xasdfgdfasgdfhthftjfthjgkodfjdyjdyjofgjdyjftyj')
    const expected = false

    expect(result).toEqual(expected)
  })

  it('should return true on medium length xxoo', () => {
    const result = isXAndOValid('xxooplkarjaja')
    const expected = true

    expect(result).toEqual(expected)
  })
})
