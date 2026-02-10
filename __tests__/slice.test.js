import slice from '../src/slice.js'

describe('slice', () => {
  const arr = [1,2,3,4,5]

  test('slices normally', () => {
    expect(slice(arr, 1, 3)).toEqual([2,3])
  })

  test('slices with start only', () => {
    expect(slice(arr, 2)).toEqual([3,4,5])
  })

  test('slices with negative start', () => {
    expect(slice(arr, -2)).toEqual([4,5])
  })

  test('slices empty array safely', () => {
    expect(slice([], 0, 3)).toEqual([])
    expect(slice(null, 0, 3)).toEqual([])
  })
})
