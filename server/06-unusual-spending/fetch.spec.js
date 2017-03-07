import {replace, when, verify} from '../../test-helper';

describe('the canary spec for fetch', () => {
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


      const priorPayment = {
        month: {year: 2017, month: 2},
        payments: [{amount: 90, category: 'basketball'}, {amount: 10, category: 'bicycling'}]
      };
      const currentPayment = {
        month: {year: 2017, month: 3},
        payments: [{amount: 90, category: 'golf'}, {amount: 30, category: 'dinner'}]
      };
      when(api('user-id', priorMonth)).thenReturn(priorPayment);
      when(api('user-id', currentMonth)).thenReturn(currentPayment);
      fetch('user-id');
      verify(api('user-id', priorMonth));
      verify(api('user-id', currentMonth));

      fetch('user-id').should.deepEqual([currentPayment, priorPayment]);

    });
  });
});
