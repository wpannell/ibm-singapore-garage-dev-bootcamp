/* eslint no-param-reassign: 'off' */
describe('the prime numbers canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const primeFactorsOf = (number) => {
    const factors = [];
    if (number > 1) {
      for (let divisor = 2; divisor <= number / 2; divisor++) {
        if (number % divisor === 0) {
          factors.push(divisor);
          number /= divisor;
          divisor = 1;
        }
      }

      if (number > 1) factors.push(number);
    }
    return factors;
  };

  describe('prime factors of', () => {
    it('1 is none', () => {
      primeFactorsOf(1).should.deepEqual([]);
    });

    it('2 are only 2', () => {
      primeFactorsOf(2).should.deepEqual([2]);
    });

    it('3 are only 3', () => {
      primeFactorsOf(3).should.deepEqual([3]);
    });

    it('4 are 2 and 2', () => {
      primeFactorsOf(4).should.deepEqual([2, 2]);
    });

    it('5 are only 5', () => {
      primeFactorsOf(5).should.deepEqual([5]);
    });

    it('6 are 2 and 3', () => {
      primeFactorsOf(6).should.deepEqual([2, 3]);
    });

    it('7 are only 7', () => {
      primeFactorsOf(7).should.deepEqual([7]);
    });

    it('8 are 2, 2 and 2', () => {
      primeFactorsOf(8).should.deepEqual([2, 2, 2]);
    });

    it('9 are 3 and 3');
    it('10 are 2 and 5');
  });
});
