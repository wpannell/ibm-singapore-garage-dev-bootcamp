describe.only('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const makeStack = () => {
    let currentSize = 0;

    return {
      isEmpty: () => true,
      pop: () => currentSize--,
      push: () => currentSize++,
      size: () => currentSize
    };
  };

  describe('a stack should', () => {
    let stack;

    beforeEach(() => {
      stack = makeStack();
    });

    it('be empty on create', () => {
      stack.isEmpty().should.be.true();
    });

    it('have size = 1 on push', () => {
      stack.push();
      stack.size().should.equal(1);
    });

    it('have size = 0 on push and pop', () => {
      stack.push();
      stack.pop();
      stack.size().should.equal(0);
    });
    it('overflow');
    it('underflow');
    it('pop what was pushed');
    it('get same 2 elements back when they\'re pushed');
    it('handle negative size');
  });
});
