import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

const unusualSpending = (id) => {
  const payments = fetch(id);
  const categorizePayments = categorize(payments);
  email(id, categorizePayments);
};

export {unusualSpending};
