const current = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const currentDate = {month, year};
  return currentDate;
};

const prior = () => {
  let priorDate = current();
  priorDate.month = priorDate.month - 1;
  if (priorDate.month - 1 < 0) {
    priorDate.year = priorDate.year - 1;
    priorDate.month = 1;
  }

  return priorDate;
};

export {current, prior};
