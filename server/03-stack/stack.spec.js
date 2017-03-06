describe('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });
  let myStack = (initialSize) => {
    if (typeof initialSize === 'string') throw new Error('illegal capacity');
    let limit = 0;
    limit = initialSize;
    let size = 0;
    let valueArray = [];
    let getSize = () => {
      return size;
    };
    let push = (value) => {
      if (limit === size) throw new Error('overflow');
      size++;
      if (typeof value === 'undefined') valueArray.push(value);
      else valueArray.push(value);
    };
    let pop = () => {
      if (size === 0) throw new Error('underflow');
      --size;
      return valueArray.pop();
    };
    return {
      getSize,
      push,
      pop
    };
  };
  describe('a stack should', () => {
    it('be empty on create', () => {
      let stack = myStack();
      stack.getSize().should.equal(0);
    });
    it('be size one on push', () => {
      let stack = myStack();
      stack.push();
      stack.getSize().should.equal(1);
    });
    it('be empty on push and pop', () => {
      let stack = myStack();
      stack.push();
      stack.pop();
      stack.getSize().should.equal(0);
    });
    it('overflow', () => {
      (() => {
        let stack = myStack(1);
        stack.push();
        stack.push();
      }).should.throw('overflow');
    });
    it('underflow', () => {
      (() => {
        let stack = myStack();
        stack.pop();
      }).should.throw('underflow');
    });
    it('pop the same element pushed', () => {
      let stack = myStack();
      stack.push(13);
      stack.pop().should.equal(13);
    });
    it('pop the same two elements pushed', () => {
      let stack = myStack();
      stack.push('a');
      stack.push('b');
      stack.pop().should.equal('b');
      stack.pop().should.equal('a');
    });
    it('error on illegal capacity', () => {
      (() => {
        myStack('a');
      }).should.throw('illegal capacity');
    });
  });
});
