const colorConverter = require('../js/colorConverter');

test('rgb to hex', () => {
  expect(colorConverter(255, 255, 255)).toBe('ffffff');
});
