const isArray = require('../js/isArray');

test('input is array', () => {
  expect(isArray([1, 2, 3])).toBe(true);
});
