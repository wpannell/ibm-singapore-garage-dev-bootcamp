import {replace, when} from '../../test-helper';

describe('fetch will', () => {
  it('call the API with this and last month', () => {

    const months = replace('./months');
    const api = replace('./api').api;

    const fetch = require('./fetch').fetch;

    const userId = 'faker-user-id';

    const currentMonth = {year: 2016, month: 12};
    const priorMonth = {year: 2016, month: 11};

    const currentPayments = [];
    const priorPayments = [];

    when(months.current()).thenReturn(currentMonth);
    when(months.prior()).thenReturn(priorMonth);

    when(api(userId, currentMonth)).thenReturn(currentPayments);
    when(api(userId, priorMonth)).thenReturn(priorPayments);

    fetch(userId).should.deepEqual([
      {month: currentMonth, payment: currentPayments},
      {month: priorMonth, payment: priorPayments}
    ]);
  });
});
