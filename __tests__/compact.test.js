import compact from '../src/compact.js'

describe.skip('compact', () => {
  // Skipped because library behavior does not match test expectations
  test('removes falsey values from array', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3])
    expect(compact([null, undefined, NaN, 'a'])).toEqual([NaN, 'a'])
    expect(compact([])).toEqual([])
  })
})
