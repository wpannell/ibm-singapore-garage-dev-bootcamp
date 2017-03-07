/*eslint dot-notation: "off"*/
import {replace, when, verify} from '../../test-helper';

describe('fetch', () => {
  it('interacts with month and api', () => {
    const months = replace('./months');
    const api = replace('./api')['api'];

    const fetch = require('./fetch')['fetch'];

    const current = {};
    const prior = {};

    when(months.current()).thenReturn(current);
    when(months.prior()).thenReturn(prior);

    fetch('user-id');
    verify(api('user-id', current));
    verify(api('user-id', prior));

  });
});
