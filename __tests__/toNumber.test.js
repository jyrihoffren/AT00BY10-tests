import toNumber from '../src/toNumber.js'

describe('toNumber', () => {
  test('basic number conversion', () => {
    expect(typeof toNumber('42')).toBe('number')
    expect(typeof toNumber(null)).toBe('number')
    expect(typeof toNumber(undefined)).toBe('number')
    expect(typeof toNumber(true)).toBe('number')
  })
})
