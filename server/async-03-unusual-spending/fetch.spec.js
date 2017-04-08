/*eslint dot-notation: "off"*/
import {replace, when} from '../../test-helper';

describe.only('fetch ', () => {
  it('interacts with months and api wrapper', () => {
    const api = replace('./api-wrapper')['apiWrapper'];
    const months = replace('./months');
    let fetch;
    const currentMonth = 'currentMonth';
    const priorMonth = 'priorMonth';
    const priorMonthPayment = 'priorMonthPayment';
    const currentMonthPayment = 'currentMonthPayment';

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
    when(api('user-id', currentMonth)).thenResolve(assertOutput);
    when(api('user-id', priorMonth)).thenResolve(priorMonthPayment);

    fetch = require('./fetch')['fetch'];


    return fetch('user-id').should.eventually.deepEqual(assertOutput);
  });
});
