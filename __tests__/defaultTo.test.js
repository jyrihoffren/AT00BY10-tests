import defaultTo from '../src/defaultTo.js'

describe('defaultTo', () => {
  test('returns value if not nullish, otherwise default', () => {
    expect(defaultTo(1, 10)).toBe(1)
    expect(defaultTo(null, 10)).toBe(10)
    expect(defaultTo(undefined, 20)).toBe(20)
    expect(defaultTo(NaN, 30)).toBeNaN() // <-- korjattu
  })
})
