import * as months from './months';
import {api} from './api';

const fetch = (id) => {
  const currentMonth = months.current();
  const priorMonth = months.prior();

  return Promise.all([api(id, priorMonth), api(id, currentMonth)]);
};

export {fetch};
