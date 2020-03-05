import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  it('should return "Stop gninnipS My sdroW" for "Stopping Spinning My Words"', () => {
    const result = spinWords('Stop Spinning My Words')
    const expected = 'Stop gninnipS My sdroW'

    expect(result).toEqual(expected)
  })
  it('should return a blank string when given one', () => {
    const result = spinWords('')
    const expected = ''

    expect(result).toEqual(expected)
  })
  it('should return "gnitseT" when given "Testing"', () => {
    const result = spinWords('Testing')
    const expected = 'gnitseT'

    expect(result).toEqual(expected)
  })
})
