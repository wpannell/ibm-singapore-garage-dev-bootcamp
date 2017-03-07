const categorize = () => {

  const categorized_payments = [{
    month: {
      year: 2017,
      month: 2
    },
    payments: [
      {amount: 960, category: 'golf'},
      {amount: 580, category: 'dinner'},
      {amount: 90, category: 'lunch'}
    ]
  }, {
    month: {
      year: 2017,
      month: 1
    },
    payments: [
      {amount: 560, category: 'golf'},
      {amount: 870, category: 'dinner'},
      {amount: 480, category: 'lunch'}
    ]
  }];

  return categorized_payments;

};

export {categorize};
