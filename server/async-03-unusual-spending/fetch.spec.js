/*eslint dot-notation: "off"*/
import {replace, when} from '../../test-helper';

describe('fetch ', () => {
  it('interacts with months and api wrapper', () => {
    const api = replace('./api-wrapper')['apiWrapper'];
    const months = replace('./months');
    let fetch;
    const currentMonth = {};
    const priorMonth = {};
    const currentMonthPayment = [];
    const priorMonthPayment = [];

    const expectedPayments = {
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

    const payments = (actualPayments) => {
      actualPayments.should.deepEqual(expectedPayments);
    };
    return fetch('user-id').then(payments);
  });
});
