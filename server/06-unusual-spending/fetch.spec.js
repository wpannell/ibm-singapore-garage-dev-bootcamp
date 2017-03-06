import td from 'testdouble';

describe('fetch spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('fetch should', () => {
    it('orchestrate the interaction of months and api', () => {
      const months = td.replace('./months');
      const api = td.replace('./api').api;

      td.when(months.prior()).thenReturn('prior-month');
      td.when(months.current()).thenReturn('current-month');
      td.when(api('dummy-id', 'prior-month')).thenResolve('prior-payments');
      td.when(api('dummy-id', 'current-month')).thenResolve('current-payments');

      const fetch = require('./fetch').fetch;
      const fetchResult = fetch('dummy-id');

      td.verify(months.prior());
      td.verify(months.current());
      td.verify(api('dummy-id', 'prior-month'));
      td.verify(api('dummy-id', 'current-month'));
    });

    it('return correct output for stubbed inputs', (done) => {
      const months = td.replace('./months');
      const api = td.replace('./api').api;

      td.when(months.prior()).thenReturn('prior-month');
      td.when(months.current()).thenReturn('current-month');
      td.when(api('dummy-id', 'prior-month')).thenResolve('prior-payments');
      td.when(api('dummy-id', 'current-month')).thenResolve('current-payments');

      const fetch = require('./fetch').fetch;
      const fetchResult = fetch('dummy-id');

      Promise.all(fetchResult).then((values) => {
        values.should.deepEqual(['prior-payments', 'current-payments']);
        done();
      });
    });
  });
});
