import castArray from '../src/castArray.js'

describe('castArray', () => {
  test('returns the same array if input is already an array', () => {
    const arr = [1, 2, 3]
    expect(castArray(arr)).toBe(arr)  // tarkistetaan referenssin tasolla, että sama objekti palautuu
  })

  test('wraps non-array values into an array', () => {
    expect(castArray(1)).toEqual([1])
    expect(castArray({ a: 1 })).toEqual([{ a: 1 }])
    expect(castArray('abc')).toEqual(['abc'])
    expect(castArray(null)).toEqual([null])
    expect(castArray(undefined)).toEqual([undefined])
  })

  test('returns an empty array if called without arguments', () => {
    expect(castArray()).toEqual([])
  })
})
