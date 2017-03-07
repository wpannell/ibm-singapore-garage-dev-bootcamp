describe('the palindrome canary spec', () => {
<<<<<<< HEAD
	it('shows the infrastructure works', () => {
		true.should.be.true();
	});
  let isPalindrome = (phrase) => {
    if (typeof phrase === 'undefined') throw new Error('phrase is missing');
    if (phrase === null) throw new Error('phrase is not be null');
    //if (!(/^[a-z A-Z()]+$/.test(phrase))) throw new Error('phrase must be string');
    if (typeof phrase !== 'string') throw new Error('phrase must be string');
    const reversed = phrase.split('').reverse().join('');
    return phrase === reversed;
  };

	describe('palindrome should be', () => {
		it('true for "mom"', () => {
      isPalindrome('mom').should.be.true();
		});

		it('false for "dude"', () => {
      isPalindrome('dude').should.be.false();
		});
=======
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
>>>>>>> origin/aldred

    it('true for "mom dad mom"', () => {
      isPalindrome('mom dad mom').should.be.true();
    });

<<<<<<< HEAD
    it('false for "any phase"', () => {
      isPalindrome('any phase').should.be.false();
=======
    it('false for "any phrase"', () => {
      isPalindrome('any phrase').should.be.false();
>>>>>>> origin/aldred
    });

    it('an error when you pass nothing', () => {
      (() => {
        isPalindrome();
      }).should.throw('phrase is missing');
    });
<<<<<<< HEAD

    it('an error when you pass null', () => {
      (() => {
        isPalindrome(null);
      }).should.throw('phrase is not be null');
    });

    it('an error when a string is not passed', () => {
      (() => {
        isPalindrome(123);
      }).should.throw('phrase must be string');
    });
	});
=======
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
>>>>>>> origin/aldred
});
