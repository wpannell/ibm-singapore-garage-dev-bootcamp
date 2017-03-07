import {current, prior} from './months';
import {api} from './api';

const fetch = (userId) => {
  const currentMonth = current();
  const priorMonth = prior();
  const currentPayments = api(userId, currentMonth);
  const priorPayments = api(userId, priorMonth);

  //       fetch('user-id').should.deepEqual([currentPayments, priorPayments]);

  return [currentPayments, priorPayments];

};

export {fetch};
