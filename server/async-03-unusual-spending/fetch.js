import * as months from './months';
import {api} from './api';

const fetch = (userId) => {
  const currentMonth = months.current();
  const priorMonth = months.prior();

  const fetchCurrentMonth = api(userId, currentMonth);
  const fetchPriorMonth = api(userId, priorMonth);

  return Promise.all([fetchCurrentMonth, fetchPriorMonth]).then(payments => {
    return payments;
  });
};

export {fetch};
