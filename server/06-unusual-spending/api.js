import {paymentInfo} from './paymentData';
const api = (id, month) => {
  let returnedPayment = {};
  for (let i = 0; i < paymentInfo.length; i++) {
    if (month.month === paymentInfo[i].month.month && month.year === paymentInfo[i].month.year) returnedPayment = paymentInfo[i];
  }
  return returnedPayment;
};

export {api};
