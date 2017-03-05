describe.only('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const isPalindrome = (word) => {
    const delimiter = '';
    return word.split(delimiter).reverse().join(delimiter) === word;
  };

  describe('palindrome should be', () => {
    it('true for "mom"', () => {
      isPalindrome('mom').should.be.true();
    });

    it('false for "dude"', () => {
      isPalindrome('dude').should.be.false();
    });

    it('true for "mom dad mom"');
    it('false for "dude dude dude dude"');
    it('"must be a word or phrase" error— for whitespace');
    it('"cannot be null" error— for null');
    it('"no argument" error— when no argument is passed');
  });
});
