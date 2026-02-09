import keys from '../src/keys.js'

describe('keys', () => {
  test('returns own enumerable property names', () => {
    expect(keys({ a: 1, b: 2 })).toEqual(['a', 'b'])
    expect(keys([])).toEqual([])
    expect(keys(null)).toEqual([])
  })
})
