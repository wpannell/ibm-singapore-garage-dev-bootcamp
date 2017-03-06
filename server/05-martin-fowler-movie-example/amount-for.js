import {REGULAR, NEW_RELEASE, CHILDRENS} from './movie-codes';

  let amountFor = (rental) => {
//noinspection Eslint
    let subTotal = 0;
    switch (rental.movie.priceCode) {
      case REGULAR:

        subTotal += 2;
        if (rental.daysRented > 2) {
          subTotal += (rental.daysRented - 2) * 1.5;
        }
        break;

      case NEW_RELEASE:

        subTotal += rental.daysRented * 3;
        break;

      case CHILDRENS:

        subTotal += 1.5;
        if (rental.daysRented > 3) {
          subTotal += (rental.daysRented - 3) * 1.5;
        }

        break;
      default:

    }
    return subTotal;

  };
export {amountFor};
