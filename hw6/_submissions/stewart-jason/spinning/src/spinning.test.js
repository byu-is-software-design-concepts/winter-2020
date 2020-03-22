import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spinning now')
    const expected = 'no gninnips now'

    expect(result).toEqual(expected)
  })

  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no bases now')
    const expected = 'no sesab now'

    expect(result).toEqual(expected)
  })

  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no basess now')
    const expected = 'no ssesab now'

    expect(result).toEqual(expected)
  })
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('planning')
    const expected = 'gninnalp'

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
})


