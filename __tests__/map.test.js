import map from '../src/map.js'

describe('map', () => {
  test('maps array with iteratee', () => {
    expect(map([1, 2, 3], x => x * 2)).toEqual([2, 4, 6])
    expect(map([], x => x * 2)).toEqual([])
  })
})
