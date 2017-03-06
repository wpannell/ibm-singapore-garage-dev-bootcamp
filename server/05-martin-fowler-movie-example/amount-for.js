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

export {amountFor};
