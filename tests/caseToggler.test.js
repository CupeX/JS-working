const caseToggler = require('../js/caseToggler');

test('toggle lower to uppercase, and opposite', () => {
  expect(caseToggler('teST')).toBe('TEst');
});
