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

rightRotation('abc');

module.exports = rightRotation;
