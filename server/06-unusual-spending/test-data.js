export const dummyId = 'dummy-id';

export const priorMonth = {
  month: {year: 2016, month: 11}
};

export const currentMonth = {
  month: {year: 2016, month: 12}
};

export const priorPayments = {
  month: {year: 2016, month: 11},
  payments: [
    {amount: 90, category: 'golf' },
    {amount: 490, category: 'dinner' },
    {amount: 90, category: 'golf' },
    {amount: 60, category: 'golf' }
  ]
};

export const currentPayments = {
  month: {year: 2016, month: 12},
  payments: [
    {amount: 190, category: 'golf' },
    {amount: 590, category: 'supper' },
    {amount: 192, category: 'basketball' },
    {amount: 196, category: 'basketball' },
    {amount: 130, category: 'supper' }
  ]
};

export const emptyPayments = {
  month: {year: 2017, month: 1},
  payments: []
};

export const categorizedPayments = [
  {
    month: {year: 2016, month: 11},
    payments: [
      {amount: 240, category: 'golf' },
      {amount: 490, category: 'dinner' }
    ]
  }, {
    month: {year: 2016, month: 12},
    payments: [
      {amount: 190, category: 'golf' },
      {amount: 720, category: 'supper' },
      {amount: 388, category: 'basketball' }
    ]
  }
];

export const categorizedPaymentsWithEmpty = [
  {
    month: {year: 2016, month: 11},
    payments: [
      {amount: 240, category: 'golf' },
      {amount: 490, category: 'dinner' }
    ]
  }, {
    month: {year: 2017, month: 1},
    payments: []
  }
];
