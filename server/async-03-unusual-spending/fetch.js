import {prior, current} from './months';
import {api} from './api';

const fetch = (id)=> {
  const priorMonth = prior();
  const currentMonth = current();

  return Promise.all([api(id, currentMonth), api(id, priorMonth)]);

};

export {fetch};
