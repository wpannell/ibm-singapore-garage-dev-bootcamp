import {lineCount} from './line-count';

describe.only('line count', () => {
  it('for file —— line-count.js —— should be 13', done => {
    function onSuccessReceivedLineCount(numberOfLines) {
      numberOfLines.should.equal(13);
      done();
    }
    lineCount('server/async-01-line-count-with-callback/line-count.js', null, onSuccessReceivedLineCount);
  });

  it('for file —— is-not-there.js —— should be problem reading file: ' +
      'is-not-there.js');
});
