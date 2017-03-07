const current = (date = new Date()) => {
  return {
    month: date.getMonth() + 1,
    year: date.getFullYear()
  };
};
const prior = (date = new Date()) => {
  const myDate = new Date(date);
  myDate.setMonth(myDate.getMonth() - 1);
  return {
    month: myDate.getMonth() + 1,
    year: myDate.getFullYear()
  };
};

export {current, prior};
