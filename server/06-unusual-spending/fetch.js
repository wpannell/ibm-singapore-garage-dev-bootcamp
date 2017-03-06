import {current, prior} from './months';
import {api} from './api';

const fetch = (userId) => {
  const currentMonth = current();
  const priorMonth = prior();
  api(userId, currentMonth);
  api(userId, priorMonth);
};

export {fetch};

// return fetch('user-id').should.eventually.deepEqual([currentMonthPayments, priorMonthPayments]);
