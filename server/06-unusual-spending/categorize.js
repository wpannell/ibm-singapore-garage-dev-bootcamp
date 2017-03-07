let calculateCategoryTotals = function (payment) {
  let categoryTotals = {};

  for (let paymentEntry of payment.payments) {
    if (typeof categoryTotals[paymentEntry.category] === 'undefined') {
      categoryTotals[paymentEntry.category] = paymentEntry.amount;
    } else {
      categoryTotals[paymentEntry.category] += paymentEntry.amount;
    }
  }

  return categoryTotals;
};
const categorize = (payments) => {
  const returnArray = [];

  for (var payment of payments) {
    let categorizedPayment = {
      month: payment.month,
      payments: []
    };

    let categoryTotals = calculateCategoryTotals(payment);

    for (let key in categoryTotals) {
      categorizedPayment.payments.push({
        amount: categoryTotals[key],
        category: key
      });
    }

    returnArray.push(categorizedPayment);
  }

  return returnArray;
};

export {categorize};
