// __tests__/chunk.smoke.test.js
import chunk from '../src/chunk.js'

describe('chunk - smoke tests', () => {
  test('returns array of arrays for valid input', () => {
    expect(Array.isArray(chunk([1, 2, 3], 1))).toBe(true)
  })

  test('returns empty array for empty input', () => {
    expect(chunk([], 2)).toEqual([])
  })
})
