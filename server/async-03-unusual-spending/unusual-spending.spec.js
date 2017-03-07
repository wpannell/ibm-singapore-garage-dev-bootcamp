/* eslint dot-notation: 'off' */
import {when, replace, verify} from '../../test-helper';

describe('unusualSpending should be', () => {
  it('interaction with fetch, categorize, email', () => {
    const fetch = replace('./fetch')['fetch'];
    const categorize = replace('./categorize')['categorize'];
    const email = replace('./email')['email'];

    when(fetch('dummy-id')).thenResolve('payments');
    when(categorize('payments')).thenReturn('categorized-payments');

    const unusualSpending = require('./unusual-spending').unusualSpending;
    return unusualSpending('dummy-id').should.eventually.equal('success');

  });

});
