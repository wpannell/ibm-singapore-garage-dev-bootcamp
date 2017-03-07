/* eslint dot-notation: 'off' */
import {when, replace, verify} from '../../test-helper';

describe('fetch should be ', () => {
  it('should call current, prior and then api', () => {
    const months = replace('./months');
    const api = replace('./api').api;

    when(months.current()).thenReturn('currentMonth');
    when(months.prior()).thenReturn('priorMonth');

    when(api('dummy-id', 'currentMonth')).thenResolve('currentPayments');
    when(api('dummy-id', 'priorMonth')).thenResolve('priorPayments');

    const fetch = require('./fetch')['fetch'];
    return fetch('dummy-id').should.eventually.deepEqual(['currentPayments', 'priorPayments']);
  });
});
