describe.only('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const isPalindrome = (phrase) => {
    if (phrase === '') throw new Error('phrase cannot be empty');
    const delimiter = '';
    return phrase.trim().split(delimiter).reverse().join(delimiter) === phrase;
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

    it('"phrase cannot be empty" error — for empty string', () => {
      (() => isPalindrome('')).should.throw('phrase cannot be empty');
    });

    it('"cannot be null" error — for null', () => {
      (() => isPalindrome(null)).should.throw('cannot be null');
    });
    it('"no argument" error — when no argument is passed');
  });
});
