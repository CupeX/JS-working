const caseToggler = prop => {
  const inverted = prop.split('').map(x => {
    if (x == x.toLowerCase()) {
      return x.toUpperCase();
    } else {
      return x.toLowerCase();
    }
  });
  console.log('input:', prop, 'output:', inverted.join(''));
};
caseToggler('teSt AGain for MY BOSSmang');
