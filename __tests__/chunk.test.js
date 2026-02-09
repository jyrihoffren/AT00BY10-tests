import chunk from '../src/chunk.js'

describe('chunk', () => {
  test('splits array into chunks of given size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']])
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']])
    expect(chunk([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]])
  })

  test('handles size larger than array length', () => {
    expect(chunk([1, 2, 3], 10)).toEqual([[1, 2, 3]])
  })

  test('handles size 0 or negative', () => {
    expect(chunk([1, 2, 3], 0)).toEqual([])
    expect(chunk([1, 2, 3], -2)).toEqual([])
  })

  test('handles empty or null array', () => {
    expect(chunk([], 2)).toEqual([])
    expect(chunk(null, 2)).toEqual([])
  })

  test('defaults to size 1 if size not provided', () => {
    expect(chunk([1, 2, 3])).toEqual([[1], [2], [3]])
  })
})
