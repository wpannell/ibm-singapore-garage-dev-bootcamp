import {replace, when, verify} from '../../test-helper';

describe.only('the canary spec for fetch', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });
  describe('fetch will', () => {
    it('interact with months and api', () => {
      const months = replace('./months');
      const api = replace('./api').api;
      const fetch = require('./fetch').fetch;

      const priorMonth = {year: 2017, month: 2};
      const currentMonth = {year: 2017, month: 3};
      when(months.prior()).thenReturn(priorMonth);
      when(months.current()).thenReturn(currentMonth);

      return fetch('user-id').then(() => {
        verify(api('user-id', priorMonth));
        verify(api('user-id', currentMonth));
      });

    });
    it('return payments for prior and current month', () => {
      const months = replace('./months');
      const api = replace('./api').api;
      const fetch = require('./fetch').fetch;

      const priorMonth = {year: 2017, month: 2};
      const currentMonth = {year: 2017, month: 3};
      when(months.prior()).thenReturn(priorMonth);
      when(months.current()).thenReturn(currentMonth);

      const priorPayment = {
          month: {year: 2017, month: 2},
          payments: [{amount: 90, category: 'basketball'}, {amount: 10, category: 'bicycling'}]
        };
      const currentPayment = {
          month: {year: 2017, month: 3},
          payments: [{amount: 90, category: 'golf'}, {amount: 30, category: 'dinner'}]
        };
      when(api('user-id', priorMonth)).thenResolve(priorPayment);
      when(api('user-id', currentMonth)).thenResolve(currentPayment);

      return fetch('user-id').should.eventually.deepEqual([currentPayment, priorPayment]);
    });
  });
});
