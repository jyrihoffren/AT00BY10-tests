// __tests__/drop.smoke.test.js
import drop from '../src/drop.js'

describe('drop - smoke tests', () => {
  test('returns array after dropping elements', () => {
    const arr = [1, 2, 3]
    const result = drop(arr, 1)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(2)
  })
})
