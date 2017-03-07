/*eslint dot-notation: "off"*/
import {replace, when, verify} from '../../test-helper';

describe('fetch', () => {
  it('interacts with months and api', () => {
    const months = replace('./months');
    const api = replace('./api')['api'];

    const currentMonth = 'current-month';
    const priorMonth = 'prior-month';

    when(months.current()).thenReturn(currentMonth);
    when(months.prior()).thenReturn(priorMonth);

    let fetch = require('./fetch').fetch;
    return fetch('user-id').then(() => {
      verify(api('user-id', currentMonth));
      verify(api('user-id', priorMonth));
    });
  });

  it('returns correct result for stubbed input', () => {
    const months = replace('./months');
    const api = replace('./api')['api'];

    const currentMonth = 'current-month';
    const priorMonth = 'prior-month';
    const currentPayments = 'current-payments';
    const priorPayments = 'prior-payments';

    when(months.current()).thenReturn(currentMonth);
    when(months.prior()).thenReturn(priorMonth);
    when(api('user-id', currentMonth)).thenResolve(currentPayments);
    when(api('user-id', priorMonth)).thenResolve(priorPayments);

    let fetch = require('./fetch').fetch;
    return fetch('user-id').should.eventually.deepEqual([currentPayments, priorPayments]);
  });
});
