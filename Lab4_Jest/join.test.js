const { joinArray } = require('./join');

test('joinArray should join with default separator comma', () => {
    expect(joinArray(["Red","Green","White","Black"])).toBe("Red,Green,White,Black");
});

test('joinArray should join with empty string separator', () => {
    expect(joinArray(["Red","Green","White","Black"], '')).toBe("RedGreenWhiteBlack");
});