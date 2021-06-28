const converter = prop => {
  let base = prop;
  if (base > 16) {
    let quotient = Math.floor(base / 16);
    let remainder = base % 16;
    console.log(quotient, remainder);
    base = quotient;
    console.log(quotient, remainder);
  }
};

converter(7562);
