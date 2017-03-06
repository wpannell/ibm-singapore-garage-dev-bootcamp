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

      let fetch;

      when(months.current()).thenReturn('current-month');
      when(months.prior()).thenReturn('prior-month');

      fetch = require('./fetch')['fetch'];
      fetch('user-id');

      verify(api('user-id', 'current-month'));
      verify(api('user-id', 'prior-month'));
    });
  });
});
