// is array?
const isArray = a => {
  const test = Array.isArray(a);
  console.log('array', test); //true, false
  return test;
};
// isArray([]);
// isArray(2);

module.exports = isArray;
