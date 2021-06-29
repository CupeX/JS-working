const leftRotation = require('../js/rotation');
const rightRotation = require('../js/rotation');

test('is rotated to left', () => {
  expect(leftRotation('abc')).toStrictEqual(['abc', 'bca', 'cab']);
});

test('is rotated to right', () => {
  expect(rightRotation('abc')).toStrictEqual(['abc', 'cab', 'bca']);
});
