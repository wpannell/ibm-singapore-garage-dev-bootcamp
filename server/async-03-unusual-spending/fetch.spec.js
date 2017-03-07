/*eslint dot-notation: "off"*/
import {replace, when, verify} from '../../test-helper';

describe.only('fetch will ', () => {
  it('call months and api', () => {
    const months = replace('./months');
    const api = replace('./api')['api'];

    const fetch = require('./fetch')['fetch'];

    var priorMonth = {year: 2017, month: 1};
    var currentMonth = {year: 2017, month: 2};

    when(months.prior()).thenReturn(priorMonth);
    when(months.current()).thenReturn(currentMonth);

    return fetch('user-id').then(() => {
    verify(api('user-id', priorMonth));
    verify(api('user-id', currentMonth));
    });
  });
});
