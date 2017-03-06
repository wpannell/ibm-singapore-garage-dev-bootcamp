import td from 'testdouble';

describe('unusual spending spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('unusual spending should', () => {
    it('orchestrate the interaction of fetch, ' +
        'categorize and email', (done) => {
      const fetch = td.replace('./fetch').fetch;
      const categorize = td.replace('./categorize').categorize;
      const email = td.replace('./email').email;

      td.when(fetch('dummy-id')).thenResolve('dummy-payments');
      td.when(categorize('dummy-payments')).thenReturn('dummy-categorized-payments');

      const unusualSpending = require('./unusual-spending').unusualSpending;
      unusualSpending('dummy-id');

      setInterval(() => {
        td.verify(fetch('dummy-id'));
        td.verify(categorize('dummy-payments'));
        td.verify(email('dummy-id', 'dummy-categorized-payments'));
        done();
      }, 20);
    });
  });
});
