import * as months from './months';
import {apiWrapper} from './api-wrapper';
const fetch = (userId) => {

  const currentMonth = months.current();
  const priorMonth = months.prior();

  const apiCurrent = apiWrapper(userId, currentMonth);
  const apiPrior = apiWrapper(userId, priorMonth);

  return Promise.all([apiCurrent, apiPrior]).then((paymentData) => {
    return Promise.resolve({
      current: {
        month: currentMonth, payment: paymentData[0]
      },
      prior: {
        month: priorMonth, payment: paymentData[1]
      }
    });
  });
};

export {fetch};
