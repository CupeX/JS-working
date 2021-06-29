const ticTacToe = prop => {
  console.log(prop);

  for (let i = 0; i < prop.length; i++) {
    const horizontal = prop[i];
    const vertical = [];
    const diagonalOne = [prop[0][0], prop[1][1], prop[2][2]];
    const diagonalTwo = [prop[0][2], prop[1][1], prop[2][0]];

    for (let j = 0; j < prop.length; j++) {
      vertical.push(prop[j][i]);
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
  ['X', 'X', 'X'],
  ['E', 'O', 'O'],
]);

module.exports = ticTacToe;
