import {current, prior} from './months';
import {api} from './api';

const fetch = (userId) => {
  const priorMonth = prior();
  const currentMonth = current();
  api(userId, priorMonth);
  api(userId, currentMonth);
};
export {fetch};
