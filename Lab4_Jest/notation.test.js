const { mean } = require('./notation');

test('mean returns correct average for numbers', () => {
  expect(mean([12, 14, 16, 10])).toBe(13);
});

test('mean works with two numbers', () => {
  expect(mean([20, 18])).toBe(19);
});

test('mean returns null for empty array', () => {
  expect(mean([])).toBeNull();
});

test('mean returns null for invalid input', () => {
  expect(mean("abc")).toBeNull();
});
