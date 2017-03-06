import td from 'testdouble';

describe.only('the canary spec for fetch', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('fetch will', () => {

    it('orachestrate the interaction of month, ' +
    'and api', () => {
    });

    it('cal the API with this and last month', () => {

      const months = td.replace('./months');
      const api = td.replace('./api').api;
      const fetch = require('./fetch').fetch;
      const userId = 'faker-user-id';

      const currentMonth = {year: 2016, month: 12};
      const priorMonth = {year: 2016, month: 11};

      td.when(months.current()).thenRetrun(currentMonth);
      td.when(months.priorMonth).thenReturn(priorMonth);
    });
  });
});
