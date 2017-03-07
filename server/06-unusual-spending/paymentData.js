const priorMonth = {year: 2017, month: 2};
const currentMonth = {year: 2017, month: 3};

const paymentInfo = [

  {
    id: 'user-id',
    paymentData: [
      {
        month: {year: 2017, month: 1},
        payments: [{amount: 90, category: 'lunch'}, {amount: 30, category: 'dinner'}]
      },
      {
        month: {year: 2017, month: 1},
        payments: [{amount: 90, category: 'lunch'}, {amount: 30, category: 'dinner'}]
      },
      {
        month: {year: 2017, month: 2},
        payments: [{amount: 90, category: 'basketball'}, {amount: 10, category: 'bicycling'}]
      },
      {
        month: {year: 2017, month: 3},
        payments: [{amount: 90, category: 'golf'}, {amount: 30, category: 'dinner'}]
      }
    ]
  }
];

export {priorMonth, currentMonth, paymentInfo};
