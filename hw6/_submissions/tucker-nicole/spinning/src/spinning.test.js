import {
  spinWords
} from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
  // More tests
  it(`'Stop Spinning My Words' should return 'Stop gninnipS My sdroW'`, () => {
    const result = spinWords('Stop Spinning My Words')
    const expected = 'Stop gninnipS My sdroW'

    expect(result).toEqual(expected)
  })

  it(`'I Love Keven Carlson' should return 'I Love neveK noslraC'`, () => {
    const result = spinWords('I Love Keven Carlson')
    const expected = 'I Love neveK noslraC'

    expect(result).toEqual(expected)
  })

  it(`'Information Systems is the best major' should return 'noitamrofnI smetsyS is the best rojam'`, () => {
    const result = spinWords('I Love Keven Carlson')
    const expected = 'I Love neveK noslraC'

    expect(result).toEqual(expected)
  })

  it(`'Class of 2020 will always be the best cohort' should return 'ssalC of 2020 will syawla be the best trohoc'`, () => {
    const result = spinWords('Class of 2020 will always be the best cohort')
    const expected = 'ssalC of 2020 will syawla be the best trohoc'

    expect(result).toEqual(expected)
  })
})