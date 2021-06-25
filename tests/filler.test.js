const filler = require('../js/filler');

test('filling array', () => {
  expect(filler(4, 3)).toStrictEqual([3, 3, 3, 3]);
});
