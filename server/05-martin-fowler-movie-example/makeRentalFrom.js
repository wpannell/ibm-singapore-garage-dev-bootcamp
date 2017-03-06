import {REGULAR, NEW_RELEASE, CHILDRENS} from './movie-codes';

let makeRentalFrom = (movie, daysRented) => {

  let amountFor = () => {
    //noinspection Eslint
    let subTotal = 0;
    switch (movie.priceCode) {
      case REGULAR:

        subTotal += 2;
        if (daysRented > 2) {
          subTotal += (daysRented - 2) * 1.5;
        }
        break;

      case NEW_RELEASE:

        subTotal += daysRented * 3;
        break;

      case CHILDRENS:

        subTotal += 1.5;
        if (daysRented > 3) {
          subTotal += (daysRented - 3) * 1.5;
        }

        break;
      default:

    }
    return subTotal;

  };


  return {
    amountFor,
    get movie() { return movie; },
    get daysRented() { return daysRented; }
  };
};

export {makeRentalFrom};
