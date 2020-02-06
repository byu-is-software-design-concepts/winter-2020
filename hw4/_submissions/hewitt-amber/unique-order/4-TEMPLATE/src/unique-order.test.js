import { uniqueInOrder } from './unique-order'

describe('When putting unique letters in order', () => {
    it('should return nothing for an empty string', () => {
        const result = uniqueInOrder('')
        const expected = []

        expect(result).toEqual(expected)
    })
    it('should work with duplicated letters', () => {
        const result = uniqueInOrder('AABBC')
        const expected = ['A', 'B', 'C']

        expect(result).toEqual(expected)
    })
})