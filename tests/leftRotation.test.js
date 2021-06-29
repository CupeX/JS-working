const leftRotation = require('../js/leftRotation');

test('is rotated to left', () => {
  expect(leftRotation('abc')).toEqual(['abc', 'bca', 'cab']);
});
