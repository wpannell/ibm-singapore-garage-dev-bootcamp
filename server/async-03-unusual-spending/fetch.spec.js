/*eslint dot-notation: "off"*/
import {replace, when, verify} from '../../test-helper';

describe('fetch ', () => {
  it('interacts with months and api', () => {
    const months = replace('./months');
    const api = replace('./api')['api'];

    const fetch = require('./fetch')['fetch'];

    const current = {};
    const month = [];
    const prior = [];

    when(months.current()).thenReturn(current);
    when(months.prior()).thenReturn(month);

    fetch('user-id');
    verify(api('user-id', prior));
  });
});
