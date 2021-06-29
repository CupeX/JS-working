const multiplier = prop => {
  const gcd = (a, b) => (a ? gcd(b % a, a) : b);
  const lcm = (a, b) => (a * b) / gcd(a, b);

  console.log(prop.reduce(lcm));
  return prop.reduce(lcm);
};

multiplier([5, 7, 11, 55, 77]);
multiplier([1, 2, 3, 4, 5, 6]);
