const { expect } = require('@jest/globals');
const letterSorting = require('../js/letterSorting');

test('letters sorted alphabeticlay', () => {
  expect(letterSorting('abba')).toBe('aabb');
});
