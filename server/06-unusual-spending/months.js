/* eslint no-param-reassign: 'off' */
const returnMonthObject = currentDate => {
  return {
    month: {
      year: currentDate.getFullYear(),
      month: currentDate.getMonth() + 1
    }
  };
};

const current = (date = new Date()) => {
  return returnMonthObject(date);
};

const prior = (date = new Date()) => {
  date.setMonth(date.getMonth() - 1);
  return returnMonthObject(date);
};

export {current, prior};
