describe.only('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const stack = {
    isEmpty: () => true,
    push: () => {},
    size: () => null
  };

  describe('a stack should', () => {
    it('be empty on create', () => {
      stack.isEmpty().should.be.true();
    });

    it('have size = 1 on push', () => {
      stack.push();
      stack.size().should.equal(1);
    });
    it('have size = 0 on push and pop');
    it('overflow');
    it('underflow');
    it('pop what was pushed');
    it('get same 2 elements back when they\'re pushed');
    it('handle negative size');
  });
});
