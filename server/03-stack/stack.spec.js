describe('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const stack = {
    isEmpty: () => true,
    push: () => {},
    pop: () => {},
    size: () => 1
  };

  describe('a stack should', () => {
    it('be empty on create', () => {
      stack.isEmpty().should.be.true();

    });

    it('size one on push', () => {
      stack.push(1);
      stack.size().should.equal(1);
    });

    it('empty on push and pop', () => {
      stack.push(1);
      stack.pop(1);
      stack.isEmpty().should.be.true();

    });

    it('overflow');
    it('underflow');
    it('pop the same element pushed');
    it('pop the same two elements pushed');
    it('error on illegal capacity');
  });
});

