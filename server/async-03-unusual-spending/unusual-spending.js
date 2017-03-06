import {fetch} from './fetch';
import {categorize} from './categorize';
import {email} from './email';

const unusualSpending = (id) => {
  const payments = fetch(id);
  const categorized = categorize(payments);
  email(id, categorized);

};

export {unusualSpending};
