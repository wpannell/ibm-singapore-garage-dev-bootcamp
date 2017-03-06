import {current, prior} from './months';
import {api} from './api';

const fetch = (userID) => {
  const priorMonth = prior();
  const currentMonth = current();
  api(userID, priorMonth);
  api(userID, currentMonth);

};

export {fetch};
