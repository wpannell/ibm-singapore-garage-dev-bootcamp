import * as months from './months';
import {api} from './api';

const fetch = (id) => {
  api(id, months.prior());
  api(id, months.current());
};

export {fetch};
