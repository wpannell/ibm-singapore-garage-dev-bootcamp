import {lineCount} from './line-count';
<<<<<<< HEAD
describe('line count', () => {
  const filespec = 'server/async-01-line-count-with-callback/line-count.js';
  it('for file —— line-count.js —— should be 13', done => {
    function onSuccessReceiveLineCount(numberOfLines) {
      numberOfLines.should.be.equal(13);
      done();
    }
    lineCount(filespec, null, onSuccessReceiveLineCount);
  });
=======
>>>>>>> origin/aldred

describe.only('line count', () => {
  const filespec = 'server/async-01-line-count-with-callback/line-count.js';
  it('for file —— line-count.js —— should be 13', (done) => {
    function onSuccessReceiveLineCount(noOfLines) {
      noOfLines.should.equal(13);
      done();
    }

    lineCount(filespec, null, onSuccessReceiveLineCount);
  });

  //noinspection JSAnnotator
  it('for file —— is-not-there.js —— should be problem reading file: ' +
      'is-not-there.js', done => {
<<<<<<< HEAD
    const onErrorReceiveLineCount = (message) => {
      message.should.be.equal('problem reading file: is-not-there.js');
      done();
    };
    lineCount('is-not-there.js', onErrorReceiveLineCount, null);
=======
    const onErrorReceiveMessage = (message) => {
      message.should.equal('problem reading file: is-not-there.js');
      done();
    };
    lineCount('is-not-there.js', onErrorReceiveMessage, null);
>>>>>>> origin/aldred
  });
});
