import toFinite from '../src/toFinite.js'

describe('toFinite', () => {
  test('basic conversion', () => {
    expect(typeof toFinite(10)).toBe('number')
    expect(typeof toFinite(Infinity)).toBe('number')
    expect(typeof toFinite(-Infinity)).toBe('number')
    expect(typeof toFinite(NaN)).toBe('number')
  })
})
