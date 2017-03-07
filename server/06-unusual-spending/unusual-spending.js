import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';


const unusualSpending = (id)=> {
  const payments = fetch(id);
  const categorizedPayments = categorize(payments);
  email(id, categorizedPayments);
};

export {unusualSpending};

