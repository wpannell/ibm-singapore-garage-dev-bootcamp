/*eslint dot-notation: "off"*/
import {replace, when, verify} from '../../test-helper';

describe('unusual spending ', () => {
  it('interacts with fetch, categorize, and email', () => {
    const fetch = replace('./fetch')['fetch'];
    const categorize = replace('./categorize')['categorize'];
    const email = replace('./email')['email'];

    let unusualSpending;

    unusualSpending = require('./unusual-spending')['unusualSpending'];

    when(fetch('user-id')).thenResolve('payments');
    when(categorize('payments')).thenReturn('categorizedPayments');

    return unusualSpending('user-id').then(() => {
      verify(email('user-id', 'categorizedPayments'));
    });
  });

});
