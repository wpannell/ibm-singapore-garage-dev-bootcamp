import {prior, current} from './months';

describe.only('months', () => {
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
});
