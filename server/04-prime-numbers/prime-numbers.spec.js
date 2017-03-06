/* eslint no-param-reassign: "off" */
describe.only('the prime numbers canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const primeFactorsOf = (number) => {
    const factors = [];

    if (number > 1) {
      if (number % 2 === 0) {
        factors.push(2);
        number /= 2;
      }
      if (number > 1) factors.push(number);
    }
    /*
    for (let divisor = 2; number > 1; divisor++) {
      for (; number % divisor === 0; number /= divisor) factors.push(divisor);
    }
    */
    return factors;
  };

  describe('a prime numbers of', () => {
    it('1 is empty', () => {
      primeFactorsOf(1).should.deepEqual([]);
    });
    it('2 is 2', () => {
      primeFactorsOf(2).should.deepEqual([2]);
    });

    it('3 is 3', () => {
      primeFactorsOf(3).should.deepEqual([3]);
    });
    it('4 is 2 and 2', () => {
      primeFactorsOf(4).should.deepEqual([2, 2]);
    });
    it('5 are only 5');
    it('6 are 2 and 3');
    it('7 are only 7');
    it('8 are 2, 2 and 2');
    it('9 are 3');
  });
});
