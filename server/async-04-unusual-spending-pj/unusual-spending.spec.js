/*eslint dot-notation: "off"*/
import {replace, when, verify} from '../../test-helper';

describe.only('unusual spending', () => {
  it('interacts with fetch, categorize, and email', () => {

    const fetch = replace('./fetch')['fetch'];
    const categorize = replace('./categorize')['categorize'];
    const email = replace('./email')['email'];

    let unusualSpending;

    when(fetch('userId')).thenResolve('payments');
    when(categorize('payments')).thenReturn('categorized');

    unusualSpending = require('./unusualSpending')['unusualSpending'];

    return unusualSpending('userId').then(() => {
      verify(email('userId', 'categorized'));
    });

  });
});
