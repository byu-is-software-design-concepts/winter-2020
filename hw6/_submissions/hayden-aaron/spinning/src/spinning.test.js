import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  it('change words round 1', () => {
    const result = spinWords('Stop Spinning My Words')
    const expected = 'Stop gninnipS My sdroW'

    expect(result).toEqual(expected)
  })
  it('change words round 2', () => {
    const result = spinWords('I really hope nobody changes this')
    const expected = 'I yllaer hope ydobon segnahc this'

    expect(result).toEqual(expected)
  })
  it('change all the words', () => {
    const result = spinWords('Words cannot explain')
    const expected = 'sdroW tonnac nialpxe'

    expect(result).toEqual(expected)
  })
  it('do not change words', () => {
    const result = spinWords('Hi my name is Bill')
    const expected = 'Hi my name is Bill'

    expect(result).toEqual(expected)
  })
})
