const { exf } = require('./echo');

test('exf prints the string the correct number of times', () => {
  const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

  exf("hello", 3);

  expect(logSpy).toHaveBeenCalledTimes(3);
  expect(logSpy).toHaveBeenCalledWith("hello");

  logSpy.mockRestore();
});
