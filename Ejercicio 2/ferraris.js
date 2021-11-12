// Create a function ferraris that returns all the cars of the Ferrari brand.
import cars from "./cars.js";

const ferraris = (cars) =>
  cars
    .filter((cars) => cars.brand === "Ferrari")
    .sort((ma, mb) => ma.model - mb.model)
    .map(
      (list) =>
        `Brand ${list.brand} model ${
          list.model
        } costs $ ${Intl.NumberFormat().format(list.price)}`
    );
console.log("Filter Only Ferraris (in order by model):");
console.log(ferraris(cars));
