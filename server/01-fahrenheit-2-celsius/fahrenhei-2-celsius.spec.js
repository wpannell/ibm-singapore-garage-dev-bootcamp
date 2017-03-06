describe('the fahrenheit2celsius canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const fahrenheit2celsius = (temperature) => {
    return (temperature - 32) * 5 / 9;
  };

  describe('fahrenheit2celsius should', () => {
    it('give 0°C for 32°F', () => {
      fahrenheit2celsius(32).should.be.equal(0);
    });
    it('give 10°C for 50°F', () => {
      fahrenheit2celsius(50).should.equal(10);
    });
  });
});
