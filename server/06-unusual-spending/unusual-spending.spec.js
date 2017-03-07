/*eslint dot-notation: "off"*/
import {replace, when, verify} from '../../test-helper';

describe('the canary spec for unusual spending', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });
  describe('unusual spending will', () => {
    it('orchestrate the interaction of fetch, categorize and email', () => {
      const fetch = replace('./fetch')['fetch'];
      const categorize = replace('./categorize')['categorize'];
      const email = replace('./email')['email'];

      let unusualSpending;

      when(fetch('user-id')).thenReturn('user-payments');
      when(categorize('user-payments')).thenReturn('categorized-payments');

      unusualSpending = require('./unusual-spending')['unusualSpending'];

      unusualSpending('user-id');
      verify(email('user-id', 'categorized-payments'));

    });
  });
});
