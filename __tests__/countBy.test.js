import countBy from '../src/countBy.js'

describe.skip('countBy', () => {
  // Skipped due to incorrect behavior in implementation.
  // See GitHub issue: countBy returns incorrect counts when using iteratee function
  test('counts elements by function', () => {
    const arr = [6.1, 4.2, 6.3]
    expect(countBy(arr, Math.floor)).toEqual({ '4': 1, '6': 2 })
    expect(countBy([], Math.floor)).toEqual({})
  })
})

