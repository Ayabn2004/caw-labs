const addition = require('./addition');

test('1 + 2 doit donner 3', () => {
  expect(addition(1, 2)).toBe(3);
});
