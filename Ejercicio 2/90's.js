// Create a function nineties that returns all the cars with models between 1980 and 1990.
import cars from "./cars.js";

const nineties = (cars) =>
  cars
    .filter((models) => models.model >= 1980 && models.model <= 1990)
    .sort((ma, mb) => ma.model - mb.model)
    .map(
      (list) =>
        `Model ${list.model} brand ${
          list.brand
        } costs $ ${Intl.NumberFormat().format(list.price)}`
    );
console.log("Cars from the 80's to 90's (in order by model):");
console.log(nineties(cars));
