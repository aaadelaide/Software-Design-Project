const Pricing = require('../modules/pricingModule');

describe('Pricing', () => {
  it('calculates PPG and estimated cost correctly.', () => {
    const result = Pricing('1500', 'TX', 1);
    expect(result.ppGal).toBeCloseTo(1.695);
    expect(result.roundedTotal).toBe('2542.50');
  });

  it('factors correctly for out of state estimates', () => {
    const result = Pricing('500', 'CA', 0);
    expect(result.ppGal).toBeCloseTo(1.755);
  });

  it('gives right factor when there is history', () => {
    const result = Pricing('1000', 'TX', 3);
    expect(result.ppGal).toBeCloseTo(1.71);
  });

  it('gives the correct gallon factor if galloon > 1000', () => {
    const result = Pricing('1500', 'TX', 0);
    expect(result.ppGal).toBeCloseTo(1.71);
  });
});
