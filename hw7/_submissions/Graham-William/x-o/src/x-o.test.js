import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true even with numbers added', () => {
    const result = isXAndOValid('x14x24o1o')
    const expected = true

    expect(result).toEqual(expected)
  })
  // it('should return true with added spaces', () => {
  //   const result = isXAndOValid('x xo o')
  //   const expected = true

  //   expect(result).toEqual(expected)
  // })
  
})
