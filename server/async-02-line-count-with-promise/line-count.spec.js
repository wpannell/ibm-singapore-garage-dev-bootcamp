import {lineCount} from './line-count';
describe('line count can be checked', () => {
<<<<<<< HEAD
  const filespec = 'server/async-02-line-count-with-promise/line-count.js';
=======
  //const filespec = 'server/async-01-line-count-with-callback/line-count.js';
>>>>>>> origin/aldred

  it('with the done parameter like with a callback', done => {
    const receiveCount = (numberOfLines) => {
      numberOfLines.should.equal(14);
      done();
    };
    lineCount(filespec).then(receiveCount);
  });

  it('by returning the promise after .then', () => {
    const receiveCount = (numberOfLines) => {
      numberOfLines.should.equal(14);
    };
    return lineCount(filespec).then(receiveCount);
  });

  it('by using eventually or fulfilledWith', () => {
    return lineCount(filespec).should.eventually.equal(14);
  });
});
