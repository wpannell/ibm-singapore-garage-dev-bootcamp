import {REGULAR, NEW_RELEASE, CHILDRENS} from './movie-codes';

let makeRentalFrom = (movie, daysRented) => {

<<<<<<< HEAD
  let getCharge = () => {
=======
  let getCharge = function () {
>>>>>>> origin/aldred
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
<<<<<<< HEAD

    }
    return subTotal;
  };

=======
    }
    return subTotal;
    };
>>>>>>> origin/aldred
  return {
    get movie() { return movie; },
    get daysRented() { return daysRented; },
    getCharge
  };

};

export {makeRentalFrom};
