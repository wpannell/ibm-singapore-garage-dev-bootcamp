/*eslint no-param-reassign: "off"*/

describe.only('the prime numbers canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const primeNumbersOf = (number) => {
    const factors = [];

    if (number > 1) {
      if (number % 2 === 0) {
        factors.push(2);
        number /= 2;
      }
    }

    if (number > 1) factors.push(number);
    return factors;
  };

  describe('prime numbers of', () => {
    it('"1" are none', () => {
      primeNumbersOf(1).should.deepEqual([]);
    });

    it('"2" is only "2"', () => {
      primeNumbersOf(2).should.deepEqual([2]);
    });

    it('"3" is only "3"', () => {
      primeNumbersOf(3).should.deepEqual([3]);
    });

    it('"4" are  "2" and "2"', () => {
      primeNumbersOf(4).should.deepEqual([2, 2]);
    });

    it('"5" is only "5"', () => {
      primeNumbersOf(5).should.deepEqual([5]);
    });

    it('"6" are  "2" and "3"', () => {
      primeNumbersOf(6).should.not.deepEqual([2, 3]);
    });
    it('"7" is only "7"');
    it('"8" are  "2," "2" and "2"');
    it('"9" are  "3" and "3"');
  });
});
