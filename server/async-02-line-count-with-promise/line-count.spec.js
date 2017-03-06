import {lineCount} from './line-count';

describe('line count can be checked', () => {
  const filespec = 'server/async-02-line-count-with-promise/line-count.js';

  it('with the done parameter like with a callback', done => {

    const receivedCount = (numberOfLines) => {
      numberOfLines.should.equal(14);
      done();
    };

    lineCount(filespec).then(receivedCount);
  });

  it('by returning the promise after .then', () => {

    const receivedCount = (numberOfLines) => {
      numberOfLines.should.equal(14);
    };

    return lineCount(filespec).then(receivedCount);

  });

  it('by using eventually or fulfilledWith', () => {
    return lineCount(filespec).should.eventually.equal(14);
  });

});
