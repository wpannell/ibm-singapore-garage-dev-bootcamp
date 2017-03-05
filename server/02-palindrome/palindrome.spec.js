describe.only('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const isPalindrome = (phrase) => {
    const delimiter = '';
    return phrase.split(delimiter).reverse().join(delimiter) === phrase;
  };

  describe('palindrome should be', () => {
    it('true for "mom"', () => {
      isPalindrome('mom').should.be.true();
    });

    it('false for "dude"', () => {
      isPalindrome('dude').should.be.false();
    });

    it('true for "mom dad mom"', () => {
      isPalindrome('mom dad mom').should.be.true();
    });

    it('false for "dude dude dude dude"', () => {
      isPalindrome('dude dude dude dude').should.be.false();
    });

    it('false for whitespace', () => {
      isPalindrome('     ').should.be.false();
    });
    it('"phrase cannot be empty" error — for empty string');
    it('"cannot be null" error — for null');
    it('"no argument" error — when no argument is passed');
  });
});
