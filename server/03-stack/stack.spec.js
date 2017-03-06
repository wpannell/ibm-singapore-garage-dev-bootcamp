describe('the stack spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let myStack = (value) => {
    if (value < 0) throw new Error('illegal capacity');
    if (typeof (value) === 'string') throw new Error('does not accept string');
    let limit = value;
    let size = 0;
    let valueArray = [];

    let getSize = () => {
      return size;
    };

    let push = (num) => {
      if (limit === size) throw new Error('overflow');
      valueArray.push(num);
      size++;
    };

    let pop = () => {
      if (size === 0) throw new Error('underflow');
      size--;
      return valueArray.pop();
    };

    return {
      getSize,
      push,
      pop
    };
  };


  let aStack = myStack();
  let bStack = myStack();

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
        let cStack = myStack(1);
        cStack.push();
        cStack.push();
      }).should.throw('overflow');
    });
    it('underflow', () => {
      (() => {
        let dStack = myStack();
        dStack.pop();
      }).should.throw('underflow');
    });
    it('pop the same element pushed', () => {
      let eStack = myStack();
      eStack.push(13);
      eStack.pop().should.equal(13);
    });
    it('pop the same two elements pushed', () => {

      let eStack = myStack();
      eStack.push(1);
      eStack.push(2);
      eStack.pop().should.equal(2);
      eStack.pop().should.equal(1);


    });
    it('error on illegal capacity', () => {
      (() => {
        myStack(-1);
      }).should.throw('illegal capacity');
    });

    it('error on putting in string as capacity', () => {
      (() => {
        myStack('str');
      }).should.throw('does not accept string');
    });


  });
});
