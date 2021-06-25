const palindromeChecker = require('../js/palindromeChecker');

test('checking if truthy', () => {
  expect(palindromeChecker('anavolimilovana')).toEqual(true);
});

test('check if equal', () => {
  expect(palindromeChecker('dgasgkas')).toEqual(false);
});
