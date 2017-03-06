describe('the fahrenheit2celsius canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const fahrenheit2celcius = (temperature) => {
    return (temperature - 32) * 5 / 9;
  };

  describe('fahrenheit2celsius should', () => {
    it('gives 0°C for 32°F', () => {
      fahrenheit2celcius(32).should.equal(0);
    });
    it('gives 10°C for 50°F', () => {
      fahrenheit2celcius(50).should.equal(10);
    });
  });
});
