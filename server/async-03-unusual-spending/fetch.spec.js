/* eslint dot-notation: 'off' */
import {replace, when, verify} from '../../test-helper';

describe('fetch spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('fetch should', () => {
    it('orchestrate the interaction of months and api', () => {
      const months = replace('./months');
      const api = replace('./api').api;

      when(months.prior()).thenReturn('prior-month');
      when(months.current()).thenReturn('current-month');
      when(api('dummy-id', 'prior-month')).thenResolve('prior-payments');
      when(api('dummy-id', 'current-month')).thenResolve('current-payments');

      const fetch = require('./fetch')['fetch'];
      fetch('dummy-id');

      verify(months.prior());
      verify(months.current());
      verify(api('dummy-id', 'prior-month'));
      verify(api('dummy-id', 'current-month'));
    });

    it('return correct output for stubbed inputs', (done) => {
      const months = replace('./months');
      const api = replace('./api').api;

      when(months.prior()).thenReturn('prior-month');
      when(months.current()).thenReturn('current-month');
      when(api('dummy-id', 'prior-month')).thenResolve('prior-payments');
      when(api('dummy-id', 'current-month')).thenResolve('current-payments');

      const fetch = require('./fetch')['fetch'];
      const fetchResult = fetch('dummy-id');

      Promise.all(fetchResult).then((values) => {
        values.should.deepEqual(['prior-payments', 'current-payments']);
        done();
      });
    });
  });
});
