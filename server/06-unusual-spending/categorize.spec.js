import {categorize} from './categorize';

describe('categorize', () => {

  const current_payments = {
    month: {
      year: 2017,
      month: 2
    },
    payments: [
      {amount: 90, category: 'golf'},
      {amount: 490, category: 'dinner'},
      {amount: 190, category: 'golf'},
      {amount: 290, category: 'golf'},
      {amount: 390, category: 'golf'},
      {amount: 90, category: 'dinner'},
      {amount: 90, category: 'lunch'}
    ]
  };

  const prior_payments = {
    month: {
      year: 2017,
      month: 1
    },
    payments: [
      {amount: 90, category: 'golf'},
      {amount: 490, category: 'dinner'},
      {amount: 190, category: 'golf'},
      {amount: 290, category: 'dinner'},
      {amount: 390, category: 'lunch'},
      {amount: 90, category: 'dinner'},
      {amount: 90, category: 'lunch'}
    ]
  };

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
      {amount: 280, category: 'golf'},
      {amount: 870, category: 'dinner'},
      {amount: 480, category: 'lunch'}
    ]
  }];

  it('categorize calculates correct totals', () => {
    categorize([current_payments, prior_payments]).should.deepEqual(categorized_payments);
  });

});
