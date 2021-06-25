const palindromeChecker = prop => {
  const test = prop.split('');
  const lastLetter = test[test.length - 1];

  // for (var i = 0; i < test.length; i++) {
  //   console.log('first:', test[i], 'last:', lastLetter, 'lenght:', test.length);
  //   console.log();
  //   if (test[i] == lastLetter) {
  //     test.pop();
  //     console.log('2', test);
  //     // return test;
  //   } else if (test.length === 1) {
  //     console.log("it's a palindrom");
  //   } else if (test[i] !== lastLetter) {
  //     console.log("it's not a palindrom");
  //   }
  // }
  return test.join('');
};
palindromeChecker('madam');

module.exports = palindromeChecker;
