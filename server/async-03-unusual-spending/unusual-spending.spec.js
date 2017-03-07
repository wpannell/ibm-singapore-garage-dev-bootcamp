/*eslint dot-notation: "off"*/
import {replace, when, verify} from '../../test-helper';

describe('unusual spending', () => {
  it('interacts with fetch, categorize, and email', () => {
    const fetch = replace('./fetch')['fetch'];
    const categorize = replace('./categorize')['categorize'];
    const email = replace('./email')['email'];

    let unusualSpending;

    when(fetch('user-id')).thenReturn('payments');
    when(categorize('payments')).thenReturn('categorized');

    unusualSpending = require('./../async-03-unusual-spending/unusual-spending')['unusualSpending'];
    unusualSpending('user-id');

    verify(email('user-id', 'categorized'));
  });
});
