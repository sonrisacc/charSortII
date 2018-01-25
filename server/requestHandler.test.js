const sortFunction = require('./requestHandler');

test('shoud sort word by letters', () => {
  expect(sortFunction('abc')).toBe('cba');
});

test('shoud ibe case insensitive', () => {
  expect(sortFunction('Abc')).toBe('cba');
});

test('shoud sort numbers in descending order and attach to the end of string', () => {
  expect(sortFunction('4A2b1c3')).toBe('cba4321');
});

test('shoud sort sentence by world', () => {
  expect(sortFunction('ab ac ad')).toBe('ad ac ab');
});

test('shoud escape symbol and numbers in a word', () => {
  expect(sortFunction('!!ab a34c ^(.a)d')).toBe('ad ac ab');
});
