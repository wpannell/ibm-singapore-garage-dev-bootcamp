import * as months from './months';
import {api} from './api';

const fetch = (id) => {
  let priorPayments = api(id, months.prior());
  let currentPayments = api(id, months.current());

  return [priorPayments, currentPayments];
};

export {fetch};
