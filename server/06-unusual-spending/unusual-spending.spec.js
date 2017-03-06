/*eslint dot-notation: "off"*/
import {replace, when, verify} from '../../test-helper';

describe('unusual spending should', () => {
  it('interact with fetch, categorize and email', () => {
    const fetch = replace('./fetch')['fetch'];
    const categorize = replace('./categorize')['categorize'];
    const email = replace('./email')['email'];

    let unusualSpending;

    when(fetch('user-id')).thenReturn('payments');
    when(categorize('payments')).thenReturn('categories');

    unusualSpending = require('./unusual-spending').unusualSpending;

    unusualSpending('user-id');

    verify(email('user-id', 'categories'));
  });
});
