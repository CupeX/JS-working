const flattener = require('../js/union');
const union = require('../js/union');

test('merge of array with unique items, sorted', () => {
  expect(union([1, 2, 3, [4, [5]]], [2, 2, [3], 4, [[5]]])).toStrictEqual([
    1, 2, 3, 4, 5,
  ]);
});

test('merge of array with unique items, sorted', () => {
  expect(flattener([1, 2, 3, [4, [5]]], [2, 2, [3], 4, [[[5]]]])).toStrictEqual(
    [1, 2, 3, 4, 5]
  );
});
