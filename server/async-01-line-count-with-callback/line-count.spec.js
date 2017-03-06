import {lineCount} from './line-count';

describe.only('line count', () => {
  const filespec = 'server/async-01-line-count-with-callback/line-count.js';

  it('for file —— line-count.js —— should be 13', (done) => {
    const onSuccessReceiveLineCount = (numberOfLines) => {
      numberOfLines.should.equal(13);
      done();
    }

    lineCount(filespec, null, onSuccessReceiveLineCount);
  });

  it('for file —— is-not-there.js —— should be problem reading file: ' +
      'is-not-there.js', (done) => {
    const onErrorReceiveMessage = (message) => {
      message.should.equal('problem reading file: is-not-there.js');
      done();
    }

    lineCount('is-not-there.js', onErrorReceiveMessage, null);
  });
});
