// Create a function bmwSum that returns the sum of all prices of the BMW cars.

import cars from "./cars.js";

const ferraris = (cars) =>
  cars
    .filter((model) => model.brand === "BMW")
    .reduce((acc, price) => acc + price.price, 0);
console.log(
  `Total price of the BMW cars $ ${Intl.NumberFormat().format(ferraris(cars))}`
);
