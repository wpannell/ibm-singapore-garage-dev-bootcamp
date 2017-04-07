/*eslint dot-notation: "off"*/
import {replace, when, verify} from '../../test-helper';

describe('unusual spending ', () => {
  it('interacts with fetch, categorize, and email', () => {
    // arrange
    const fetch = replace('./fetch')['fetch'];
    const categorize = replace('./categorize')['categorize'];
    const email = replace('./email')['email'];

    let unusualSpending;

    when(fetch('user-id')).thenResolve('payments');
    when(categorize('payments')).thenReturn('categorized');

    unusualSpending = require('./unusual-spending')['unusualSpending'];

    const payments = () => {
      verify(email('user-id', 'categorized'));
    };

    return unusualSpending('user-id').then(payments);
  });

});
