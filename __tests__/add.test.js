import add from '../src/add.js';

test('add() adds two numbers', () => {
  expect(add(1, 2)).toBe(3);
  expect(add(-5, 5)).toBe(0);
});

