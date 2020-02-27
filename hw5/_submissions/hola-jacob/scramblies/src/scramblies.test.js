import { scramble } from './scramblies'

describe('When validating scrambled words', () => {
  it('should return true for an empty string', () => {
    const result = scramble('', '')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return true for word', () => {
    const result = scramble('onitatrepu', 'reputation')
    const expected = true

    expect(result).toEqual(expected)
  })
  it('should return false for word', () => {
    const result = scramble('oooscter', 'scooter')
    const expected = false

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
})
