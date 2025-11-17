const { s1, s2, m1, m2 } = require('./fileImport');
const { mean } = require('./notation');

test('m1 is correct mean of s1', () => {
  expect(m1).toBe(mean(s1)); // should be 13
});

test('m2 is correct mean of s2', () => {
  expect(m2).toBe(mean(s2)); // should be 19
});
