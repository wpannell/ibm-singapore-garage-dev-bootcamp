/*eslint no-param-reassign: "off"*/

const returnDate = (date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1
  };
};

const validateDate = (date) => {
  if (typeof date === 'undefined') {
    date = new Date();
  }
  if (date instanceof Date === false){
    throw new Error('invalid argument');
  }
  return date;
};

const prior = (optionalDate) => {
  optionalDate = validateDate(optionalDate);
  optionalDate.setMonth(optionalDate.getMonth() - 1);
  return returnDate(optionalDate);
};

const current = (optionalDate) => {
  optionalDate = validateDate(optionalDate);
  return returnDate(optionalDate);
};

export {current, prior};
