const fahrenheit2celsius = (temperature) => {
  return (temperature - 32) * 5 / 9;
};

describe('the fahrenheit2celsius canary test', () => {
  const PRECISION = 0.01;

  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('fahrenheit2celsius should', () => {
    it('give 0°C for 32°F', () => {
      fahrenheit2celsius(32).should.equal(0);
    });

    it('give 10°C for 50°F', () => {
      fahrenheit2celsius(50).should.equal(10);
    });

    it('give -40°C for -40°F', () => {
      fahrenheit2celsius(-40).should.equal(-40);
    });

    it('give -17.78°C for 0°F', () => {
      fahrenheit2celsius(0).should.be.approximately(-17.78, PRECISION);
    });
  });
});
