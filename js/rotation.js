const leftRotation = prop => {
  const left = [];
  shifted = [...prop];

  for (let i = 0; i < prop.length; i++) {
    left.push(shifted.join(''));
    shifted.push(shifted.shift());
  }

  console.log('left:', left);

  return left;
};

const rightRotation = prop => {
  const right = [];
  shifted = [...prop];

  for (let i = 0; i < prop.length; i++) {
    right.push(shifted.join(''));
    const popped = shifted.pop();
    shifted.unshift(popped);
  }
  console.log('right:', right);

  return right;
};

leftRotation('abcde');
rightRotation('abcde');

module.exports = leftRotation;
module.exports = rightRotation;
