import * as months from './months';
import {apiWrapper} from './api-wrapper';
const fetch = (userId) => {

  const currentMonth = months.current();

  const apiCurrent = apiWrapper(userId, currentMonth);

  return new Promise(resolve => {
    resolve(apiCurrent);
  });
};

export {fetch};
