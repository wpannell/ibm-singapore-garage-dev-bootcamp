import {current, prior} from './months';
import {api} from './api';

const fetch = (userId) => {
  const currentMonth = current();
  const priorMonth = prior();

  const currentPayment = api(userId, currentMonth);
  const priorPayment = api(userId, priorMonth);

  return [{month: currentMonth, payment: currentPayment},
    {month: priorMonth, payment: priorPayment}];
};

export {fetch};
