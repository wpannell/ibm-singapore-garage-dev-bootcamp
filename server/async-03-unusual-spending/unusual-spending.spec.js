/* eslint dot-notation: 'off' */
import {replace, when, verify} from '../../test-helper';

describe('unusual spending spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('unusual spending should', () => {
    it('orchestrate the interaction of fetch, ' +
        'categorize and email', (done) => {
      const fetch = replace('./fetch')['fetch'];
      const categorize = replace('./categorize')['categorize'];
      const email = replace('./email')['email'];

      when(fetch('dummy-id')).thenResolve('dummy-payments');
      when(categorize('dummy-payments')).thenReturn('dummy-categorized-payments');

      const unusualSpending = require('./unusual-spending')['unusualSpending'];
      unusualSpending('dummy-id');

      setInterval(() => {
        verify(email('dummy-id', 'dummy-categorized-payments'));
        done();
      }, 20);
    });
  });
});
