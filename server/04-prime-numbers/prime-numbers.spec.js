describe('the prime numbers canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('prime numbers of', () => {
    it('"1" are none');
    it('"2" is only "2"');
    it('"3" is only "3"');
    it('"4" are  "2" and "2"');
    it('"5" is only "5"');
    it('"6" are  "2" and "3"');
    it('"7" is only "7"');
    it('"8" are  "2," "2" and "2"');
    it('"9" are  "3" and "3"');
  });
});
