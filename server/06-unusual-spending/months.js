/* eslint no-param-reassign: 'off' */
const returnMonthObject = currentDate => {
  return {
    month: {
      year: currentDate.getFullYear(),
      month: currentDate.getMonth() + 1
    }
  };
};

const current = (currentDate) => {
  if (typeof currentDate === 'undefined') {
    currentDate = new Date();
  }

  return returnMonthObject(currentDate);
};

const prior = (currentDate) => {
  if (typeof currentDate === 'undefined') {
    currentDate = new Date();
  }

  currentDate.setMonth(currentDate.getMonth() - 1);
  return returnMonthObject(currentDate);
};

export {current, prior};
