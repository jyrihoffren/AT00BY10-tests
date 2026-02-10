// __tests__/countBy.smoke.test.js
import countBy from '../src/countBy.js'

describe('countBy - smoke tests', () => {
  test('returns an object', () => {
    const result = countBy([1.1, 2.2], Math.floor)
    expect(typeof result).toBe('object')
  })
})
