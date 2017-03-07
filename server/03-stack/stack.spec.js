describe('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });
<<<<<<< HEAD
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
=======

  let myStack = (capacity) => {
    if (typeof capacity === 'string') throw new Error('stack size should be integer');
    if (capacity < 0) throw new Error('stack size should not be negative number');
    const limit = capacity;
    let size = 0;
    let valueArray = [];

    let push = (number) => {
      if (limit === size) throw new Error('stack is overflowed');
      valueArray.push(number);
      size++;
    };

    let pop = () => {
      if (size === 0) throw new Error('stack size is lesser than 0');
      size--;
      return valueArray.pop();
    };

    let getSize = () => {
      return size;
    };

    return {
      push,
      pop,
      getSize
    };
  };

  let aStack = myStack();
  let bStack = myStack();
  let cStack = myStack(1);
  let dStack = myStack(1);
  let eStack = myStack(2);

  describe('a stack should', () => {
    it('be empty on create', () => {

      aStack.getSize().should.equal(0);
    });

    it('be size one on push', () => {
      aStack.push();
      aStack.getSize().should.equal(1);
    });

    it('be empty on push and pop', () => {
      bStack.push();
      bStack.pop();
      bStack.getSize().should.equal(0);
    });

    it('overflow', () => {
      (() => {
        cStack.push();
        cStack.push();
      }).should.throw('stack is overflowed');
    });

    it('underflow', () => {
      (() => {
        dStack.pop();
      }).should.throw('stack size is lesser than 0');
    });

    it('pop the same element pushed', () => {
      eStack.push(13);
      eStack.pop().should.equal(13);
    });

    it('pop the same two elements pushed', () => {
      eStack.push('a');
      eStack.push('b');
      eStack.pop().should.equal('b');
      eStack.pop().should.equal('a');
    });

    it('error on capacity in negative number', () => {
      (() => {
        eStack = myStack(-1);
      }).should.throw('stack size should not be negative number');
    });

    it('error on capacity in string', () => {
      (() => {
        eStack = myStack('test');
      }).should.throw('stack size should be integer');
    });

>>>>>>> origin/aldred
  });
});
