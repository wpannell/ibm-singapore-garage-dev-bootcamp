import * as months from './months';
import {apiWrapper} from './api-wrapper';

const fetch = (userId) => {

  const currentMonths = months.current();
  const priorMonths = months.prior();
  const currentPayment = apiWrapper(userId, currentMonths);
  const priorPayment = apiWrapper(userId, priorMonths);

  let output = {
    current: {
      month: currentMonths, payments: currentPayment
    },
    prior: {
      month: priorMonths,
      payments: priorPayment
    },
  };


  return output;
};

export {fetch};
