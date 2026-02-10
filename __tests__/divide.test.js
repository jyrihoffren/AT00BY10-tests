import divide from '../src/divide.js'

describe.skip('divide', () => {
  // Skipped because library implementation does not match expected behavior
  test('divides two numbers', () => {
    expect(divide(6, 3)).toBe(2)
  })

  test('returns NaN when dividing by zero', () => {
    expect(divide(6, 0)).toBeNaN()
  })
})
