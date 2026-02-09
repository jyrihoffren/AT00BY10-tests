import camelCase from '../src/camelCase.js';

test('camelCase() converts strings to camel case', () => {
  // trim() poistaa alkavat/loppuvat välilyönnit
  expect(camelCase('hello world').trim()).toBe('helloWorld');
  expect(camelCase('Foo BAR').trim()).toBe('fooBar');
  expect(camelCase('').trim()).toBe('');
});

