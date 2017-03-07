import * as months from './months';
//import {priorMonth, currentMonth} from './paymentData';

describe('the canary spec for months', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });
  describe('months will', () => {
    it('show current month when current() is called', () => {
      const MAR_2017 = {
        year: 2017,
        month: 3
      };
      months.current().should.deepEqual(MAR_2017);
    });
    it('show prior month when prior() is called', () => {
      const FEB_2017 = {
        year: 2017,
        month: 2
       };
       months.prior().should.deepEqual(FEB_2017);
    });
    it('show DEC_2016 when current(DEC_2016) is called', () => {
       const DEC_2016 = {
         year: 2016,
         month: 12
      };
       months.current(new Date(2016, 11)).should.deepEqual(DEC_2016);
    });
    it('show DEC_2016 when prior(JAN_2017) is called', () => {
      const DEC_2016 = {
        year: 2016,
        month: 12
      };
      months.prior(new Date(2017, 0)).should.deepEqual(DEC_2016);
    });
    it('show error when invalid argument is passed to current', () => {
      (() => {
        months.current({});
      }).should.throw('invalid argument');
    });
    it('show error when invalid argument is passed to prior', () => {
      (() => {
        months.prior({});
      }).should.throw('invalid argument');
    });
  });
});
