
const { first } = require('./first');

test('first should return the first element if n is null', () => {
    expect(first([1,2,3], null)).toBe(1);
});

test('first should return first 2 elements', () => {
    expect(first([1,2,3,4], 2)).toEqual([1,2]);
});

test('first should return empty array if n <= 0', () => {
    expect(first([1,2,3], 0)).toEqual([]);
});

test('first should return empty array if array is null', () => {
    expect(first(null, 3)).toEqual([]);
});
