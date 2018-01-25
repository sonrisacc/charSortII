const sortFunction = require('./requestHandler');

test('shoud sort decending order', () => {
  expect(sortFunction('abc')).toBe('cba');
});

test('shoud ibe case insensitive', () => {
  expect(sortFunction('Abc')).toBe('cba');
});

test('shoud sort numbers in descending order and attach to the end of string', () => {
  expect(sortFunction('4A2b1c3')).toBe('cba4321');
});
