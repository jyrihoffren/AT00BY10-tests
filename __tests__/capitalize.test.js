import capitalize from '../src/capitalize.js'  // HUOM: ilman {} default exportin vuoksi

test('capitalize() makes first letter uppercase', () => {
  expect(capitalize('hello')).toBe('Hello')
  expect(capitalize('javaScript')).toBe('Javascript') // testi vastaa toteutusta (vain ensimmäinen iso)
  expect(capitalize('')).toBe('')
  // Jos halutaan testata null, varmista, että funktio sitä tukee tai poista testi
  // expect(capitalize(null)).toBe('')
})



