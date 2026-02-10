import toInteger from '../src/toInteger.js'

describe('toInteger', () => {
  test('basic integer conversion', () => {
    expect(Number.isInteger(toInteger(4.7))).toBe(true)
    expect(Number.isInteger(toInteger(-3.2))).toBe(true)
    expect(Number.isInteger(toInteger(NaN))).toBe(true)
  })
})
