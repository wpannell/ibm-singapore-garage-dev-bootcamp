import {prior, current} from './months';

describe('months', () => {
  const DEC_2016 = {
    month: {
      year: 2016,
      month: 12
    }
  };
  const JAN_2017 = {
    month: {
      year: 2017,
      month: 1
    }
  };
  const FEB_2017 = {
    month: {
      year: 2017,
      month: 2
    }
  };
  const MAR_2017 = {
    month: {
      year: 2017,
      month: 3
    }
  };

  it('current returns current month', () => {
    current().should.deepEqual(MAR_2017);
  });

  it('prior returns prior month', () => {
    prior().should.deepEqual(FEB_2017);
  });

  it('current returns JAN_2017 if we are in January', () => {
    var date = new Date(2017, 0, 20);
    current(date).should.deepEqual(JAN_2017);
  });

  it('prior returns DEC_2016 if we are in January', () => {
    var date = new Date(2017, 0, 20);
    prior(date).should.deepEqual(DEC_2016);
  });
});
