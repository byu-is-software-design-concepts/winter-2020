import { isXAndOValid } from './x-o'

describe('When validating the x and o count', () => {
  it('should return true on equal x and o strings', () => {
    const result = isXAndOValid('xxoo')
    const expected = true

    expect(result).toEqual(expected)
  }),
  it('schould return false if there are 3 xs 2 os and random letters', () => {
    const result = isXAndOValid('xXxoojksdf');
    const expected = false;

    expect(result).toEqual(expected);
  })
})
