const isPalindrome = (phrase) => {
  if (phrase === null) throw new Error('phrase is null');
  if (typeof phrase === 'undefined') throw new Error('phrase is missing');
  if (typeof phrase !== 'string') throw new Error('phrase should be a string');

  const reverse = phrase.split('').reverse().join('');

  return phrase === reverse;
};

describe('the isPalindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('isPalindrome should be', () => {
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

    it('an error when you pass null', () => {
      (() => {
        isPalindrome(null);
      }).should.throw('phrase is null');
    });

    it('an error when a string is not passed', () => {
      (() => {
        isPalindrome({});
      }).should.throw('phrase should be a string');
    });
  });
});
