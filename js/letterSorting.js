const letterSorting = prop => {
  const sorted = prop.split('').sort().join('');
  console.log(`input: ${prop}, output: ${sorted}`);
  return sorted;
};
letterSorting('webmaster');

module.exports = letterSorting;
