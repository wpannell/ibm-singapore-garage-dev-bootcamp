import * as months from './months';

describe('months ', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  it('returns the current month as 04 2017', () => {
    const currentDate = {month: 4, year: 2017};
    months.current().should.deepEqual(currentDate);
  });

  it('returns the prior month as 03 2017', () => {
    const priorDate = {month: 3, year: 2017};
    months.prior().should.deepEqual(priorDate);
  });

});
