const sortNestedArray = prop => {
  const test = [...prop];
  console.log('test main:', test);

  for (let i = 0; i < test.length; i++) {
    test.sort((a, b) => {
      if (typeof a == 'number' && typeof b == 'number') {
        return a - b;
      } else if (typeof a == 'number' && Array.isArray(b)) {
        [extractB] = b;
        return a - extractB;
      }
    });
  }
};

sortNestedArray([[3], 4, [2], [5], 1, 6]);
