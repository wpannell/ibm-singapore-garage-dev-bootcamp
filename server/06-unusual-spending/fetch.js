import {current, prior} from './months';
import {api} from './api';

const fetch = (userId) => {
  return [api(userId, current()), api(userId, prior())];
};

export {fetch};
