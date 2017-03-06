import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

const unusualSpending = (id) => {
  email(id, categorize(fetch(id)));
};

export {unusualSpending};
