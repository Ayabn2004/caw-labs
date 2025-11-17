

const { last } = require('./last');

test('last should return the last element if n is null', () => {
    expect(last([1,2,3], null)).toBe(3);
});

test('last should return last 2 elements', () => {
    expect(last([1,2,3,4], 2)).toEqual([3,4]);
});

test('last should return empty array if array is null', () => {
    expect(last(null, 2)).toEqual([]);
});
