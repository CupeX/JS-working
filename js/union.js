// union
const arr1 = [1, 2, 3, [4, 5]];
const arr2 = [100, 2, 1, 10, [4, [5]]];

const union = (a, b) => {
  const newArr = a.concat(b).flat(Infinity);

  const uniqueArr = newArr.filter((item, pos) => {
    return newArr.indexOf(item) === pos;
  });

  uniqueArr.sort((a, b) => {
    return a - b;
  });

  console.log(uniqueArr);
  return uniqueArr;
};
union(arr1, arr2);

// union with reducer
const arr3 = arr1.concat(arr2).flat(Infinity);
const test = arr3.reduce((acc, cur) => {
  if (!acc.includes(cur)) {
    acc.push(cur);
  }
  return acc;
}, []);

console.log(
  test.sort((a, b) => {
    return a - b;
  })
);

module.exports = union;
