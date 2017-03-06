export const current = (dateParam) => {
  let date = dateParam;

  if (typeof date === 'undefined') {
    date = new Date();
  }

  return {
    month: {
      year: date.getFullYear(),
      month: date.getMonth() + 1
    }
  };
};

export const prior = (dateParam) => {
  let date = dateParam;

  if (typeof date === 'undefined') {
    date = new Date();
  }

  date.setMonth(date.getMonth() - 1);

  return {
    month: {
      year: date.getFullYear(),
      month: date.getMonth() + 1
    }
  };
};
