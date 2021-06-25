// array filler
const filler = (a, b) => {
  let filledArray = [];
  for (var i = 0; i < a; i++) {
    filledArray.push(b);
  }
  console.log(filledArray);
  return filledArray;
};

filler(2, 6);
filler(11, 4);

// const arr4 = [4, 7];

const fillerReducer = (a, b) => {
  [a, b].reduce((acc, cur) => {
    let newArr = [];
    newArr.length = acc;
    newArr.fill(cur);

    console.log(newArr);
  });
};
fillerReducer(7, 13);

const newFiller = (a, b) => {
  [a, b].reduce((acc, cur) => {
    let newArr = new Array(acc);
    newArr.fill(cur);
    console.log(newArr);
  });
};
newFiller(9, 7);

module.exports = filler;
