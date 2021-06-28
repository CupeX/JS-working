// union
const arr1 = [1, 2, 3, [4, 5]];
const arr2 = [100, 2, 1, 10, [4, [5, [[6]]]]];
const arr3 = arr1.concat(arr2).flat(Infinity);

const union = (a, b) => {
  const newArr = a.concat(b).flat(Infinity);

  const uniqueArr = newArr.filter((item, pos) => {
    return newArr.indexOf(item) === pos;
  });

  uniqueArr.sort((a, b) => {
    return a - b;
  });

  // console.log(uniqueArr);
  return uniqueArr;
};
union(arr1, arr2);

// union with reducer
const reduceFn = prop => {
  const sorted = prop.reduce((acc, cur) => {
    if (!acc.includes(cur)) {
      acc.push(cur);
    }
    return acc;
  }, []);
  console.log(
    'sorted',
    sorted.sort((a, b) => {
      return a - b;
    })
  );
  return sorted.sort((a, b) => {
    return a - b;
  });
};

// reduceFn(arr3);

// union with recursion()
const arr4 = arr1.concat(arr2);

const flattener = prop => {
  let flatArray = [];
  let i, max_i;
  for (i = 0, max_i = prop.length; i <= max_i; i++) {
    if (typeof prop[i] == 'number') {
      flatArray.push(prop[i]);
    } else if (Array.isArray(prop[i])) {
      const extract = prop[i];
      flatArray = [...flatArray, ...extract];
      sortedArr = [...flatArray];

      flattener(flatArray);
    }
  }

  return reduceFn(sortedArr);
};

flattener(arr4);

module.exports = union;
module.exports = flattener;
