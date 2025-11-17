
const { chunk } = require('./chunk');

test('chunk should divide array into chunks of size 2', () => {
    expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]);
});

test('chunk should handle size larger than array', () => {
    expect(chunk([1,2], 5)).toEqual([[1,2]]);
});

test('chunk should handle empty array', () => {
    expect(chunk([], 3)).toEqual([]);
});