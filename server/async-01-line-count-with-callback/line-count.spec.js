import {lineCount} from './line-count.js';

describe('line count', () => {
  const filespec = 'server/async-01-line-count-with-callback/line-count.js';

  it('for file —— line-count.js —— should be 13', done => {

    function onSuccessReceiveLineCount(numberOfLines) {
      numberOfLines.should.equal(13);
      done();
    }

    //const lineCount = (filename, onError, onSuccess) => {
    lineCount(filespec, null, onSuccessReceiveLineCount);
  });
  it('for file —— is-not-there.js —— should be problem reading file: ' +
      'is-not-there.js');
});

