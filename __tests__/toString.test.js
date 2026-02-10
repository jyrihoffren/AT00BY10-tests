import toString from '../src/toString.js'

describe('toString', () => {
  test('basic string conversion', () => {
    expect(typeof toString(42)).toBe('string')
    expect(typeof toString(null)).toBe('string')
    expect(typeof toString(undefined)).toBe('string')
    expect(typeof toString([1,2,3])).toBe('string')
  })
})
