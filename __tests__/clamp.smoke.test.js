// __tests__/clamp.smoke.test.js
import clamp from '../src/clamp.js'

describe('clamp - smoke tests', () => {
  test('returns a number within bounds', () => {
    const val = clamp(5, 0, 10)
    expect(val).toBeGreaterThanOrEqual(0)
    expect(val).toBeLessThanOrEqual(10)
  })
})
