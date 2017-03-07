import * as months from './months';
import {api} from './api';

const fetch = (id) => {
  return Promise.all([
    api(id, months.current()),
    api(id, months.prior())
  ]);
};

export {fetch};
