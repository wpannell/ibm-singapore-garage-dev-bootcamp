import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

const unusualSpending = (userId) => {
  let categorizedPayments;
  return fetch(userId).then((payments) => {
    categorizedPayments = categorize(payments);
    email(userId, categorizedPayments);
  });

};

export {unusualSpending};
