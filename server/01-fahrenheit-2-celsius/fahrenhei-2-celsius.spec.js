describe('the fahrenheit2celsius canary test', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const fahrenheight2celcius = (temperature) => {
    return (temperature - 32) * 5 / 9;
  };

  describe('fahrenheit2celsius should', () => {
    it('give 0°C for 32°F', () => {
      fahrenheight2celcius(32).should.equal(0);
    });

    it('give 10°C for 50°F', () => {
      fahrenheight2celcius(50).should.equal(10);
    });

  });
});
