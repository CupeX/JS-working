const sortNestedArray = require('../js/sortNestedArray');

test('sort nested array', () => {
  expect(sortNestedArray([[3], 4, [2], [5], 1, 6])).toStrictEqual([
    1,
    [2],
    [3],
    4,
    [5],
    6,
  ]);
});
