import {prior, current} from './months';
import {api} from './api';

const fetch = (id)=> {
  const priorMonth = prior();
  const currentMonth = current();

  const priorMonthPayment = api(id, priorMonth);
  const currentMonthPayment = api(id, currentMonth);

  return [currentMonthPayment, priorMonthPayment];

};

export {fetch};
