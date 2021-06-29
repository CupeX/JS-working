const ticTacToe = prop => {
  console.log(prop);

  for (let i = 0; i < prop.length; i++) {
    const horizontal = prop[i];
    const vertical = [];
    const diagonalOne = [];
    const diagonalTwo = [];

    for (let j = 0; j < prop.length; j++) {
      vertical.push(prop[j][i]);
      diagonalOne.push(prop[j][j]);
    }
    for (let y = prop.length - 1; y >= 0; y--) {
      diagonalTwo.push(prop[y][y]);
    }

    if (horizontal.every((val, i, arr) => val === arr[0])) {
      return horizontal[0];
    } else if (vertical.every((val, i, arr) => val === arr[0])) {
      return vertical[0];
    } else if (diagonalOne.every((val, i, arr) => val === arr[0])) {
      return diagonalOne[0];
    } else if (diagonalTwo.every((val, i, arr) => val === arr[0])) {
      return diagonalTwo[0];
    }
  }
  return 'DRAW';
};

ticTacToe([
  ['X', 'O', 'X'],
  ['X', 'X', 'O'],
  ['E', 'O', 'X'],
]);

// ticTacToe([
//   ['1', '2', '3'],
//   ['4', '5', '6'],
//   ['7', '8', '9'],
// ]);

// console.log(
//   ticTacToe([
//     ['X', 'O', 'X'],
//     ['X', 'E', 'O'],
//     ['E', 'O', 'X'],
//   ])
// );

module.exports = ticTacToe;
