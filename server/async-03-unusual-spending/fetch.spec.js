/*eslint dot-notation: "off"*/
import {replace, when, verify} from '../../test-helper';

describe.only('fetch ', () => {
  it('interacts with months and api wrapper', () => {
    const api = replace('./api-wrapper')['apiWrapper'];
    const months = replace('./months');
    let fetch;
    const currentMonth = {month: 4, year: 2017};
    const priorMonth = {month: 3, year: 2017};
    const currentMonthPayment = [{price: 100, category: 'dinner'}, {price: 100, category: 'lunch'}];
    const priorMonthPayment = [{price: 100, category: 'dinner'}, {price: 100, category: 'lunch'}];

    const assertOutput = {
      current: {
        month: currentMonth, payment: currentMonthPayment
      },
      prior: {
        month: priorMonth, payment: priorMonthPayment
      }
    };

    when(months.current()).thenReturn(currentMonth);
    when(months.prior()).thenReturn(priorMonth);
    when(api('user-id', currentMonth)).thenResolve(currentMonthPayment);
    when(api('user-id', priorMonth)).thenResolve(priorMonthPayment);

    fetch = require('./fetch')['fetch'];

    const payments = (input) => {
      input.should.deepEqual(assertOutput);
    };
    return fetch('user-id').then(payments);
  });
});
