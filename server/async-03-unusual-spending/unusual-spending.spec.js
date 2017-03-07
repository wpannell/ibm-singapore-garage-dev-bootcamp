/*eslint dot-notation: "off"*/
import {replace, when, verify} from '../../test-helper';

describe('the canary spec for unusual spending async', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });
  describe('unusual spending will', () => {
    it('orchestrate the interaction of fetch, categorize and email', () => {
      const fetch = replace('./fetch')['fetch'];
      const categorize = replace('./categorize')['categorize'];
      const email = replace('./email')['email'];

      let unusualSpending;

      when(fetch('user-id')).thenResolve('user-payments');
      when(categorize('user-payments')).thenReturn('categorized-payments');

      unusualSpending = require('./unusual-spending')['unusualSpending'];

      return unusualSpending('user-id').then(() => {
        verify(email('user-id', 'categorized-payments'));
      });
    });
  });
});
