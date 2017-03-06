const addPaymentToCategory = (categories, payment) => {
  if (typeof categories[payment.category] === 'undefined') {
    categories[payment.category] = payment.amount;
  } else {
    categories[payment.category] += payment.amount;
  }
};

const categorize = (monthlyPayments) => {
  let categorizedPayments = [];

  for (let monthlyPayment of monthlyPayments) {
    let categories = {};
    let categorizedPayment = {
      month: monthlyPayment.month,
      payments: []
    };

    for (let payment of monthlyPayment.payments) {
      addPaymentToCategory(categories, payment);
    }

    for (let category in categories) {
      categorizedPayment.payments.push({
        amount: categories[category],
        category: category
      });
    }

    categorizedPayments.push(categorizedPayment);
  }

  return categorizedPayments;
};

export {categorize};
