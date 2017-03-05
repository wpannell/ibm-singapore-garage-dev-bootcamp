describe.only('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  const makeStack = (capacity = 2) => {
    let queue = [];
    let currentSize = 0;

    const pop = () => {
      if (currentSize === 0) throw new Error('underflow');
      currentSize--;
      return queue.pop();
    };

    const push = (element) => {
      if (currentSize === capacity) throw new Error('overflow');
      queue.push(element);
      currentSize++;
    };

    return {
      isEmpty: () => currentSize === 0,
      pop,
      push,
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

    it('not be empty on push', () => {
      stack.push();
      stack.isEmpty().should.be.false();
    });

    it('have size = 0 on push and pop', () => {
      stack.push();
      stack.pop();
      stack.size().should.equal(0);
    });

    it('be empty on push and pop', () => {
      stack.push();
      stack.pop();
      stack.isEmpty().should.be.true();
    });

    it('overflow', () => {
      (() => {
        stack.push();
        stack.push();
        stack.push();
      }).should.throw('overflow');
    });

    it('underflow', () => {
      (() => stack.pop()).should.throw('underflow');
    });

    it('pop what was pushed', () => {
      const element = {};
      stack.push(element);
      stack.pop().should.equal(element);
    });

    it('get same 2 elements back when they\'re pushed', () => {
      const element1 = {};
      const element2 = [];
      stack.push(element1);
      stack.push(element2);
      stack.pop().should.equal(element2);
      stack.pop().should.equal(element1);
    });
    it('handle negative size');
  });
});
