import isDate from '../src/isDate.js'

describe('isDate', () => {
  test('returns true for Date object', () => {
    expect(isDate(new Date())).toBe(true)
  })

  test('returns false for date string', () => {
    expect(isDate('Mon April 23 2012')).toBe(false)
  })

  test('returns false for timestamp number', () => {
    expect(isDate(Date.now())).toBe(false)
  })

  test('returns false for null', () => {
    expect(isDate(null)).toBe(false)
  })

  test('returns false for undefined', () => {
    expect(isDate(undefined)).toBe(false)
  })

  test('returns false for plain object', () => {
    expect(isDate({})).toBe(false)
  })

  test('returns false for array', () => {
    expect(isDate([])).toBe(false)
  })

  test('returns false for function', () => {
    expect(isDate(() => {})).toBe(false)
  })

  test('returns false for boolean', () => {
    expect(isDate(true)).toBe(false)
  })
})
