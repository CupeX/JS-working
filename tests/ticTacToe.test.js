const ticTacToe = require('../js/ticTacToe');

test('look for winner', () => {
  expect(
    ticTacToe([
      ['X', 'O', 'X'],
      ['X', 'X', 'X'],
      ['E', 'O', 'O'],
    ])
  ).toBe('X');
});

test('look for winner', () => {
  expect(
    ticTacToe([
      ['O', 'O', 'O'],
      ['X', 'X', 'X'],
      ['E', 'O', 'O'],
    ])
  ).toBe('O');
});

test('look for winner', () => {
  expect(
    ticTacToe([
      ['O', 'X', 'O'],
      ['X', 'O', 'X'],
      ['E', 'O', 'X'],
    ])
  ).toBe('DRAW');
});
