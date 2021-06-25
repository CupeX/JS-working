// is array?
const isArray = a => {
  console.log(Array.isArray(a)); //true, false
};
isArray([]);
isArray(2);

module.exports = isArray;
