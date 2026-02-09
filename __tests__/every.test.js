import every from '../src/every.js'

describe('every', () => {
  test('checks if all elements satisfy predicate', () => {
    expect(every([true, true], Boolean)).toBe(true)
    expect(every([true, false], Boolean)).toBe(false)
    expect(every([], Boolean)).toBe(true)
  })
})
