const rightRotation = require('../js/rightRotation');

test('is rotated to right', () => {
  expect(rightRotation('abc')).toEqual(['abc', 'cab', 'bca']);
});
