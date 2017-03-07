import {api} from './api';
import * as months from './months';
import {paymentInfo} from './paymentData';

describe('the canary spec for api', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });
  describe('api will', () => {
    it('show the payment for year 2017 month 3 when api(user-id, {year 2017, month 3}) is called', () => {
      api('user-id', months.current()).should.deepEqual(paymentInfo[2]);
    });
    it('show the payment for year 2017 month 2 when api(user-id, {year 2017, month 2}) is called', () => {
      api('user-id', months.prior()).should.deepEqual(paymentInfo[1]);
    });
  });
});
