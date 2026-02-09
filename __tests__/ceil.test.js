import ceil from '../src/ceil.js'

describe('ceil', () => {
  test('rounds up numbers without precision', () => {
    expect(ceil(4.006)).toBe(5)
    expect(ceil(-3.2)).toBe(-3)
  })

  test('rounds up numbers with positive precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01)
    expect(ceil(1.2345, 3)).toBe(1.235)
  })

  test('rounds up numbers with negative precision', () => {
    expect(ceil(6040, -2)).toBe(6100)
    expect(ceil(12345, -3)).toBe(13000)
  })

  test('handles zero and edge cases', () => {
    expect(ceil(0)).toBe(0)
    expect(Object.is(ceil(-0), -0)).toBe(true) // hyväksytään -0
    expect(ceil(NaN)).toBeNaN()
    expect(ceil(Infinity)).toBe(Infinity)
    expect(ceil(-Infinity)).toBe(-Infinity)
  })
})
