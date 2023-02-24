const assert = require('assert');

describe('calculateNumber', () => {
  const calculateNumber = require('./0-calcul.js');
  it('calculateNumber(1, 3) = 4', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('calculateNumber(1, 3.7) = 5', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('calculateNumber(1.5, 3.7) = 6', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
