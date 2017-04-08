/*eslint dot-notation: "off"*/
import {replace, when} from 'testdouble';

describe('fetch ', () => {
  it('interacts with months and api', () => {
    const apiWrapper = replace('./api-wrapper')['apiWrapper'];
    const months = replace('./months');

    let fetch;

    const userId = 'user-id';
    const current = 'currentMonth';
    const prior = 'priorMonth';
    const currentPayment = 'currentPayment';
    const priorPayment = 'priorPayment';


    when(months.current()).thenReturn(current);
    when(months.prior()).thenReturn(prior);
    when(apiWrapper(userId, current)).thenReturn(currentPayment);
    when(apiWrapper(userId, prior)).thenReturn(priorPayment);

    fetch = require('./fetch')['fetch'];

    const expected = {
      current: {
        month: current, payments: currentPayment //arrar
      },
      prior: {
        month: prior,
        payments: priorPayment //arrar
      },
    };
    fetch(userId).should.deepEqual(expected);

  });
});
