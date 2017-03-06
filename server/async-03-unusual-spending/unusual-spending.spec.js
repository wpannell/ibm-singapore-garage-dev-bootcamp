/*eslint dot-notation: "off"*/
import {replace, when, verify} from '../../test-helper';

describe('unusual spending should', () => {
  it('canary test shows the infrastructure works', () => {
    true.should.be.true();
  });

  it('interact with fetch, high-spending and email', () => {
    const fetch = replace('./fetch')['fetch'];
    const categorize = replace('./categorize')['categorize'];
    const email = replace('./email')['email'];

    let unusualSpending;

    when(fetch('user-id')).thenResolve('payments');
    when(categorize('payments')).thenReturn('categorized');

    unusualSpending = require('./unusual-spending').unusualSpending;

    const emailPayments = () => {
      verify(email('user-id', 'categorized'));
    };

    return unusualSpending('user-id').then(emailPayments);
  });
});
