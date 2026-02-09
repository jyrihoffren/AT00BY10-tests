import endsWith from '../src/endsWith.js'

describe('endsWith', () => {
  test('checks if string ends with target', () => {
    expect(endsWith('abc', 'c')).toBe(true)
    expect(endsWith('abc', 'b')).toBe(false)
    expect(endsWith('abc', '')).toBe(true)
  })
})
