import difference from '../src/difference.js'

describe('difference', () => {
  test('returns difference of two arrays', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1])
    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3])
    expect(difference([], [1, 2])).toEqual([])
  })
})
