const flattener = require('../js/union');
const union = require('../js/union');

test('merge of array with unique items, sorted', () => {
  expect(union([1, 2, 3, [4, [5]]], [2, 2, [3], 4, [[5]]])).toStrictEqual([
    1, 2, 3, 4, 5,
  ]);
});

test('merge of array with unique items, sorted', () => {
  expect(
    flattener([1, 47, 120, 23, 2, 3, 35, [4, [5]]], [2, 2, [3], 4, [[[5]]]])
  ).toStrictEqual([1, 2, 3, 4, 5, 23, 35, 47, 120]);
});
