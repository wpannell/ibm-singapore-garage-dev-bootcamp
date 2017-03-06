import td from 'testdouble';

describe('the unusual spending spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('unusual spending will', () => {

    it('orachestrate the interaction of fetch, ' +
    'categorize and email', () => {

      const fetch = td.replace('./fetch').fetch;
      const categorize = td.replace('./categorize').categorize;
      const email = td.replace('./email').email;

      let unusualSpending;

      td.when(fetch('dummy-id')).thenReturn('dummy-payments');
      td.when(categorize('dummy-payments')).thenReturn('dummy-categorized-payments');

      unusualSpending = require('./unusual-spending').unusualSpending;

      unusualSpending('dummy-id');

      td.verify(email('dummy-id', 'dummy-categorized-payments'));
    });
  });
});
