const union = require('../js/union');

test('merge of array with unique items, sorted', () => {
  expect(union([1, 2, 3], [2, 2, 3, 4])).toStrictEqual([1, 2, 3, 4]);
});
