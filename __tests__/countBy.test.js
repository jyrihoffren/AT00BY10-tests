import countBy from '../src/countBy.js'

describe('countBy', () => {
  test('counts elements by function', () => {
    const arr = [6.1, 4.2, 6.3]
    expect(countBy(arr, Math.floor)).toEqual({ '4': 1, '6': 2 })
    expect(countBy([], Math.floor)).toEqual({})
  })
})
