import * as months from './months';
import {apiWrapper} from './api-wrapper';
const fetch = (userId) => {

  const currentMonth = months.current();
  const priorMonth = months.prior();

  const apiCurrent = apiWrapper(userId, currentMonth);
  const apiPrior = apiWrapper(userId, priorMonth);

  return Promise.all([apiCurrent, apiPrior]).then((paymentData) => {
    let newObj = {};
    let current = {};
    let prior = {};
    current.month = currentMonth;
    current.payment = paymentData[0];
    prior.month = priorMonth;
    prior.payment = paymentData[1];
    newObj.current = current;
    newObj.prior = prior;
    return Promise.resolve(newObj);
  });

};

export {fetch};
