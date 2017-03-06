describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let isPalindrome = (phrase) => {
    if (typeof phrase === 'undefined') throw new Error('phrase is missing');
    if (phrase === null) throw new Error('null is not a valid input');
    if (typeof phrase !== 'string') throw new Error('phrase must be string');

    const reversed = phrase.split('').reverse().join('');
    return reversed === phrase;
  };

  describe('palindrome should be', () => {
    it('true for mom', () => {
      isPalindrome('mom').should.be.true();
    });

    it('false for "dude', () => {
      isPalindrome('dude').should.be.false();
    });

    it('true for "mom dad mom"', () => {
      isPalindrome('mom dad mom').should.be.true();
    });

    it('false for "any phrase"', () => {
      isPalindrome('any phrase').should.be.false();
    });

    it('an error when you pass nothing', () => {
      (() => {
        isPalindrome();
      }).should.throw('phrase is missing');
    });
    it('an error when you pass null', () => {
      (() => {
        isPalindrome(null);
      }).should.throw('null is not a valid input');
    });
    it('an error when a string is not passed', () => {
      (() => {
        isPalindrome(65);
      }).should.throw('phrase must be string');
    });
  });
});
