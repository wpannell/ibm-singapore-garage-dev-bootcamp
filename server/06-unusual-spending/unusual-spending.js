import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

export const unusualSpending = (id) => {
  fetch(id).then((payments) => {
    email(id, categorize(payments));
  });
};
