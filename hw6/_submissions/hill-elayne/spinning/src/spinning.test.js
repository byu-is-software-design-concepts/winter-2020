import { spinWords } from './spinning'

describe('When spinning words', () => {
  it('should not spin any words if under 5 characters', () => {
    const result = spinWords('no spin now')
    const expected = 'no spin now'

    expect(result).toEqual(expected)
  })
<<<<<<< HEAD
  // TODO: Add more tests
=======
  it('should spin only words that are 5 letters and over', () => {
    const result = spinWords('Stop Spinning My Words')
    const expected = 'Stop gninnipS My sdroW'

    expect(result).toEqual(expected)
  })
>>>>>>> db8738fcbca9cd49a7dcd2e5fc52f53a5707f382
})
