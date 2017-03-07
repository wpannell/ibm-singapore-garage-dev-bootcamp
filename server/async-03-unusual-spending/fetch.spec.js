/*eslint dot-notation: "off"*/
import {replace, when} from '../../test-helper';

describe.only('fetch ', () => {
  it('interacts with months and api', () => {
    const months = replace('./months');
    const api = replace('./api')['api'];

    const fetch = require('./fetch')['fetch'];

    const current = {month: 12, year: 2016};
    const prior = {month: 11, year: 2016};
    const priorMonthPayment = [{amount: 270, category: 'golf' }, {amount: 190, category: 'chess' }];
    const currentMonthPayment = [{amount: 780, category: 'basketball' }, {amount: 290, category: 'bicycling' }];

    when(months.current()).thenReturn(current);
    when(months.prior()).thenReturn(prior);

    fetch('user-id');
    when(api('user-id', prior)).thenReturn(priorMonthPayment);
    when(api('user-id', current)).thenReturn(currentMonthPayment);
  });
});
