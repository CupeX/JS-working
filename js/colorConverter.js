const hexCalc = (a, b, c) => {
  let res = [];
  const calculator = prop => {
    let base = prop;
    let hex = '';
    const hexBase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    if (base > 16) {
      let quotient = Math.floor(base / 16);
      let remainder = base % 16;
      remainder = hexBase[remainder - 1];
      hex = remainder;
      base = quotient;

      if (base < 16) {
        let remainder = base % 16;
        remainder = hexBase[remainder - 1];
        hex = remainder + hex;
      }
    }
    return res.push(hex);
  };

  calculator(a);
  calculator(b);
  calculator(c);
  return res.join('');
};

const colorConverter = (a, b, c) => {
  if (a > 255 || b > 255 || c > 255) {
    alert('out of range');
    return;
  } else {
    const result = hexCalc(a, b, c);
    console.log(typeof result);
    return result;
  }
};

colorConverter(156, 222, 255);
colorConverter(255, 255, 255);

module.exports = colorConverter;
