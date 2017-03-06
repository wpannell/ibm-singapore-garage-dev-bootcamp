import * as months from './months';

describe('months spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  describe('months should', () => {

    let DEC_2016 = new Date(2016, 11, 25);
    let JAN_2017 = new Date(2017, 0, 25);
    let FEB_2017 = new Date(2017, 1, 25);

    it('return correct details for prior month when it is Dec 2016', () => {
      let priorMonth = months.prior(new Date(DEC_2016));
      priorMonth.month.year.should.equal(2016);
      priorMonth.month.month.should.equal(11);
    });

    it('return correct details for prior month when it is Jan 2017', () => {
      let priorMonth = months.prior(new Date(JAN_2017));
      priorMonth.month.year.should.equal(2016);
      priorMonth.month.month.should.equal(12);
    });

    it('return correct details for prior month when it is Feb 2017', () => {
      let priorMonth = months.prior(new Date(FEB_2017));
      priorMonth.month.year.should.equal(2017);
      priorMonth.month.month.should.equal(1);
    });

    it('return correct details for current month when it is Dec 2016', () => {
      let currentMonth = months.current(new Date(DEC_2016));
      currentMonth.month.year.should.equal(2016);
      currentMonth.month.month.should.equal(12);
    });

    it('return correct details for current month when it is Jan 2017', () => {
      let currentMonth = months.current(new Date(JAN_2017));
      currentMonth.month.year.should.equal(2017);
      currentMonth.month.month.should.equal(1);
    });

    it('return correct details for current month when it is Feb 2017', () => {
      let currentMonth = months.current(new Date(FEB_2017));
      currentMonth.month.year.should.equal(2017);
      currentMonth.month.month.should.equal(2);
    });
  });
});
