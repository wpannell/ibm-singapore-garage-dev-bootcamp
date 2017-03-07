import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';


const unusualSpending = (id)=> {
  return fetch(id).then((payments) => {
    const categorizedPayments = categorize(payments);
    email(id, categorizedPayments);
  });
};

export {unusualSpending};

