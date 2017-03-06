/* eslint dot-notation: 'off' */
import {replace, when, verify} from '../../test-helper';

describe('fetch spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('fetch should', () => {
    it('interact with months and api', () => {
      const months = replace('./months');
      const api = replace('./api')['api'];

      when(months.current()).thenReturn('current-month');
      when(months.prior()).thenReturn('prior-month');

      const fetch = require('./fetch')['fetch'];
      fetch('user-id');

      verify(api('user-id', 'current-month'));
      verify(api('user-id', 'prior-month'));
    });

    it('return correct output for stubbed inputs', () => {
      const months = replace('./months');
      const api = replace('./api')['api'];

      when(months.prior()).thenReturn('prior-month');
      when(months.current()).thenReturn('current-month');
      when(api('dummy-id', 'prior-month')).thenReturn('prior-payments');
      when(api('dummy-id', 'current-month')).thenReturn('current-payments');

      const fetch = require('./fetch')['fetch'];
      fetch('dummy-id').should.deepEqual(['prior-payments', 'current-payments']);
    });
  });
});
