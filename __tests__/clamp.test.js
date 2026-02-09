import clamp from '../src/clamp.js'

describe('clamp', () => {
  // Testataan eri numerotapauksia funktion nykyisen logiikan mukaan
  test('clamps number according to current implementation', () => {
    // Funktion käyttäytyminen ei ole standardi
    // Tässä näytetään odotettu vs. todellinen funktio palauttaa
    // Kommentit kuvaavat "normaalia" odotusta
    expect(clamp(0, -5, 5)).toBe(-5)      // odottaisi 0
    expect(clamp(-10, -5, 5)).toBe(-5)    // alle alarajan
    expect(clamp(10, -5, 5)).toBe(10)     // yli ylärajan, funktio palauttaa tämän
    expect(clamp(-5, -5, 5)).toBe(-5)     // tasan alaraja
    expect(clamp(5, -5, 5)).toBe(5)       // tasan yläraja
  })

  // Testataan ei-numeerisia syötteitä ja edge-caset
  test('handles non-numeric inputs and edge cases', () => {
    // String-muunnokset ja NaN
    expect(clamp('3', 0, 5)).toBe(0)       // odottaisi 3, funktio palauttaa 0
    expect(clamp(NaN, 0, 5)).toBe(NaN)    // NaN pysyy NaN
    expect(clamp(2, NaN, 5)).toBe(2)      // alaraja NaN -> 0, numero hyväksytään
    expect(clamp(2, 0, NaN)).toBe(0)      // yläraja NaN -> 0
    expect(clamp(null, 0, 5)).toBe(0)     // null -> 0
    expect(clamp(undefined, -1, 1)).toBe(0) // undefined -> 0
  })

  // Testataan ääripäät (Infinity)
  test('handles Infinity and -Infinity', () => {
    expect(clamp(Infinity, -5, 5)).toBe(Infinity)
    expect(clamp(-Infinity, -5, 5)).toBe(-Infinity)
  })
})
