import * as months from './months';

describe('months should', () => {
  it('current should return current month', () => {
    months.current().should.deepEqual({month: 3, year: 2017});
  });
  it('current should return JAN_2017 when we specify current date of 20/1/2017', () => {
    const date = new Date(2017, 0, 20);
    months.current(date).should.deepEqual({month: 1, year: 2017});
  });
  it('current should return FEB_2017 when we specify current date of 20/2/2017', () => {
    const date = new Date(2017, 1, 20);
    months.current(date).should.deepEqual({month: 2, year: 2017});
  });
  it('prior should return prior month', () => {
    months.prior().should.deepEqual({month: 2, year: 2017});
  });
  it('prior should return DEC_2016 when we specify current date of 20/1/2017', () => {
    const date = new Date(2017, 0, 20);
    months.prior(date).should.deepEqual({month: 12, year: 2016});
  });
  it('prior should return JAN_2017 when we specify current date of 20/2/2017', () => {
    const date = new Date(2017, 1, 20);
    months.prior(date).should.deepEqual({month: 1, year: 2017});
  });
});
