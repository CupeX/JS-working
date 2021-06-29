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

leftRotation('abc');
module.exports = leftRotation;
