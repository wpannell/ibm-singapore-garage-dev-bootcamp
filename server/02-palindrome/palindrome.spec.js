describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let isPalindrome = (phrase) => {
    if (typeof phrase === 'undefined') throw new Error('phrase is missing');
    if (phrase === null) throw new Error('phrase is can not be null');
    if (typeof phrase !== 'string') throw new Error('phrase should be a string');

    const reversed =
    phrase.split('').reverse().join('');

    return phrase === reversed;
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
    it('false for "any phrase"', () => {
      isPalindrome('any phrase').should.be.false();
    });
    it('an error when you pass nothing', () => {
      (() => {
        isPalindrome();
      }).should.throw('phrase is missing');
    });
    it('error when you pass null', () => {
      (() => {
        isPalindrome(null);
      }).should.throw('phrase is can not be null');
    });
    it('an error when a string is not passed', () => {
      (() => {
        isPalindrome(0);
      }).should.throw('phrase should be a string');
    });
  });
});
