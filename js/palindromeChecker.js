const palindromeChecker = prop => {
  const word = prop.split('');

  for (var i = 0; i < word.length; i++) {
    const firstLetter = word[i];
    const lastLetter = word[word.length - (i + 1)];

    if (firstLetter === lastLetter) {
      console.log(firstLetter, lastLetter, i, word.length - i);

      if (i === word.length - i || i + 1 === word.length - i) {
        console.log("it's a palindrome", word.join(''));
        return word.join('');
      }
    } else {
      console.log("it's not a palindrom:", word.join(''));
      return word.join('');
    }
  }
};
palindromeChecker('anavolimilovana');

module.exports = palindromeChecker;
