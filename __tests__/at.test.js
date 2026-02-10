import at from '../src/at.js'

describe('at', () => {
  test('gets values at given paths', () => {
    const obj = { a: { b: 2 }, c: 3 }
    expect(at(obj, ['a.b', 'c'])).toEqual([2, 3])
  })

  test('returns empty array for no paths', () => {
    expect(at({ a: 1 }, [])).toEqual([])
  })
})
