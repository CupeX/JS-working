const colorConverter = require('../js/colorConverter');

test('rgb to hex', () => {
  expect(colorConverter(0, 0, 0)).toBe('000000');
});
