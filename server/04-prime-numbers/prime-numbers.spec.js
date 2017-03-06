/*eslint no-param-reassign: "off"*/
describe.only('the prime numbers canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const primeFactorsOf = (number) => {
    let factors = [];
    for (let divisor = 2; number > 1; divisor++) {
      for (; number % divisor === 0; number /= divisor) factors.push(divisor);
    }

    return factors;

  };

  describe('a prime factors of ', () => {
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

    it('5 is only 5', () => {
      primeFactorsOf(5).should.deepEqual([5]);
    });

    it('6 is 2 and 3', () => {
      primeFactorsOf(6).should.deepEqual([2, 3]);
    });

    it('7 is only 7', () => {
      primeFactorsOf(7).should.deepEqual([7]);
    });

    it('8 are 2, 2, and 2', () => {
      primeFactorsOf(8).should.deepEqual([2, 2, 2]);
    });

    it('9 are 3 and 3', () => {
      primeFactorsOf(9).should.deepEqual([3, 3]);

    });

  });
});
