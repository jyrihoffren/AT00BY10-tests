import isBoolean from '../src/isBoolean.js'

describe('isBoolean', () => {
  test('checks if value is boolean', () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
    expect(isBoolean(0)).toBe(false)
    expect(isBoolean(null)).toBe(false)
  })
})
