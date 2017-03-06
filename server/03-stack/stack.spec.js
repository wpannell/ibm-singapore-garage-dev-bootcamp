const stackFactory = (capacityParam) => {
  const INITIAL_CAPACITY = 10;

  let size = 0;
  let capacity = INITIAL_CAPACITY;
  let elements = [];

  const isEmpty = () => {
    return true;
  };

  const getSize = () => {
    return size;
  };

  const push = (element) => {
    if (size === capacity) throw new Error('Overflow');
    elements[size++] = element;
  };

  const pop = () => {
    if (size === 0) throw new Error('Underflow');
    return elements[--size];
  };

  const peek = () => {
    if (size === 0) throw new Error('Underflow');
    return elements[size - 1];
  };

  if (typeof capacity !== 'undefined') capacity = capacityParam;
  if (capacity < 0) throw new Error('Illegal Capacity');

  return {
    isEmpty,
    getSize,
    push,
    pop,
    peek
  };
};

describe('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('a stack should', () => {
    it('be empty on create', () => {
      const stack = stackFactory();
      stack.isEmpty().should.be.true();
    });

    it('be size one on push', () => {
      const stack = stackFactory();
      stack.push(1);
      stack.getSize().should.equal(1);
    });

    it('be empty after one push and one pop', () => {
      const stack = stackFactory();
      stack.push(1);
      stack.pop();
      stack.getSize().should.equal(0);
    });

    it('throw an error when pushed past limit', () => {
      (() => {
        const stack = stackFactory(1);
        stack.push(1);
        stack.push(1);
      }).should.throw('Overflow');
    });

    it('throw an error when popped past limit', () => {
      (() => {
        const stack = stackFactory(1);
        stack.pop();
      }).should.throw('Underflow');
    });

    it('pop the same element pushed', () => {
      const stack = stackFactory();
      stack.push(1);
      stack.pop().should.equal(1);
    });

    it('pop the same two elements pushed', () => {
      const stack = stackFactory();
      stack.push(1);
      stack.push(2);
      stack.pop().should.equal(2);
      stack.pop().should.equal(1);
    });

    it('throw an error on illegal capacity', () => {
      (() => {
        stackFactory(-1);
      }).should.throw('Illegal Capacity');
    });

    it('push overflows when capacity is 0', () => {
      (() => {
        const stack = stackFactory(0);
        stack.push();
      }).should.throw('Overflow');
    });

    it('pop underflows when capacity is 0', () => {
      (() => {
        const stack = stackFactory(0);
        stack.pop();
      }).should.throw('Underflow');
    });

    it('return the top-most stack element when peeked, without taking it off', () => {
      const stack = stackFactory();
      stack.push(1);
      stack.push(2);
      stack.peek().should.equal(2);
      stack.peek().should.equal(2);
      stack.pop().should.equal(2);
      stack.peek().should.equal(1);
      stack.pop().should.equal(1);
    });

    it('peek underflows when capacity is 0', () => {
      (() => {
        const stack = stackFactory(0);
        stack.peek();
      }).should.throw('Underflow');
    });
  });
});
