import { createMumble } from './mumbling'

describe('When mumbling words', () => {
  it('should return an empty string when given an empty string', () => {
    const result = createMumble('')
    const expected = ""

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
})

describe('When mumbling words', () => {
  it('should return A-Bb-Ccc when given an abc', () => {
    const result = createMumble("abc")
    const expected = "A-Bb-Ccc"

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
})

describe('When mumbling words', () => {
  it('should return A-Bb-Ccc-Dddd-Eeeee-Ffffff when given an aBcDeF', () => {
    const result = createMumble("aBcDeF")
    const expected = "A-Bb-Ccc-Dddd-Eeeee-Ffffff"

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
})

describe('When mumbling words', () => {
  it('should return -Bb-Ccc-Dddd-Eeeee-Ffffff when given an aBCDeF', () => {
    const result = createMumble("aBCDeF")
    const expected = "A-Bb-Ccc-Dddd-Eeeee-Ffffff"

    expect(result).toEqual(expected)
  })
  // TODO: Add more tests
})