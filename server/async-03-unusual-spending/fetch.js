import * as months from './months';
import {api} from './api';


const fetch = (id) => {

  const priorMonth = months.prior();
  const currentMonth = months.current();

  return Promise.all([api(id, priorMonth), api(id, currentMonth)]);
};

export {fetch};
