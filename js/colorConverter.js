const hexCalc = (a, b, c) => {
  let res = [];
  const calculator = prop => {
    let base = prop;
    let hex = '';
    let quotient = '';
    let remainder = '';
    const hexBase = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ];
    if (base > 16) {
      quotient = Math.floor(base / 16);
      remainder = base % 16;
      remainder = hexBase[remainder];
      hex = remainder;
      base = quotient;

      if (base < 16) {
        quotient = Math.floor(base / 16);
        remainder = base % 16;
        remainder = hexBase[remainder];
        hex = remainder + hex;
        base = quotient;
      }
    } else {
      remainder = '0' + hexBase[base];
      return res.push(remainder);
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
    console.log('result:', result);
    return result;
  }
};

colorConverter(156, 222, 255);
colorConverter(255, 255, 255);
colorConverter(1, 1, 1);
colorConverter(15, 14, 10);
colorConverter(0, 0, 0);

module.exports = colorConverter;
