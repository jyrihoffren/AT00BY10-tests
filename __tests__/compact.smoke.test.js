// __tests__/compact.smoke.test.js
import compact from '../src/compact.js'

describe('compact - smoke tests', () => {
  test('removes falsey values but keeps others', () => {
    const input = [0, 1, false, 2, '', 3]
    const result = compact(input)

    // Varmistetaan ettei falsey-arvoja ole
    expect(result.includes(0)).toBe(false)
    expect(result.includes(false)).toBe(false)
    expect(result.includes('')).toBe(false)
    expect(result.includes(null)).toBe(false)
    expect(result.includes(undefined)).toBe(false)
    expect(result.includes(NaN)).toBe(false)

    // Varmistetaan, että muita arvoja on mukana
    expect(result.length).toBeGreaterThan(0)
  })
})
