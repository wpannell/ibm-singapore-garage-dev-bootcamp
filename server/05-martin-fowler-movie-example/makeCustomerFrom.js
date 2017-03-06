import {REGULAR, NEW_RELEASE, CHILDRENS} from './movie-codes';

let amountFor = (each) => {
  let subTotal = 0;
  //noinspection Eslint
  switch (each.movie.priceCode) {
    case REGULAR:
      subTotal += 2;
      if (each.daysRented > 2) {
        subTotal += (each.daysRented - 2) * 1.5;
      }
      break;

    case NEW_RELEASE:
      subTotal += each.daysRented * 3;
      break;

    case CHILDRENS:
      subTotal += 1.5;
      if (each.daysRented > 3) {
        subTotal += (each.daysRented - 3) * 1.5;
      }
      break;

    default:
  }
  return subTotal;
};

let makeCustomerFrom = (name) => {
  let rentals = [];

  return {
    get name() { return name; },
    addRental(rental) { rentals.push(rental); },

    statement() {
      let total = 0;
      let frequentRenterPoints = 0;
      let statement = 'Rental Record for ' + name + '\n';

      for (let i = 0; i < rentals.length; i++) {
        let rental = rentals[i];
        let subTotal = amountFor(rental);

        // add frequent renter points
        frequentRenterPoints++;

        // add bonus for a two day new release rental
        if ((rental.movie.priceCode === NEW_RELEASE) &&
            rental.daysRented > 1) frequentRenterPoints++;

        //show figures for this rental
        statement += '\t' + rental.movie.title + '\t' + subTotal.toString(10) + '\n';

        total += subTotal;
      }

      //add footer lines
      statement += 'Amount owed is ' + total.toString(10) + '\n';
      statement += 'You earned ' + String(frequentRenterPoints) +
          ' frequent renter points';

      return statement;
    }
  };
};

export {makeCustomerFrom};
