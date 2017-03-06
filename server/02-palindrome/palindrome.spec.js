describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let isPalindrome = function (phrase) {
    if (typeof phrase === 'undefined') throw new Error('phrase is missing');
    if (phrase === null) throw new Error('phrase is null');
    if (phrase === '') throw new Error('phrase is not passed');
    if (typeof phrase !== 'string') throw new Error('string is not passed');
    const reversed = phrase.split('').reverse().join('');
    return phrase === reversed;
  };

  describe('palindrome should be', () => {
    it('true for mom', () => {
      isPalindrome('mom').should.be.true();
    });

    it('false for dude', () => {
      isPalindrome('dude').should.be.false();

    });

    it('true for mom dad mom', () => {
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
      }).should.throw('phrase is null');

    });

    it('an error for a string is not passed', () => {

      (() => {
        isPalindrome({});
      }).should.throw('string is not passed');

    });
  });
});
