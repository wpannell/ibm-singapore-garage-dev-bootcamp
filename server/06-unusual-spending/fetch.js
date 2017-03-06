import * as months from './months';
import {api} from './api';

export const fetch = (id) => {
  let priorPayments = api(id, months.prior());
  let currentPayments = api(id, months.current());

  return [priorPayments, currentPayments];
};
