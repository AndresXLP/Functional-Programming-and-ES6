/* 
Create a function list that returns an array of strings with the same number of cars.
Each element should contain the string “This from costs $” 
(e.g. for the first element it should say “This Mazda from 1989 costs $5241”).
*/

import cars from "./cars.js";

const list = (cars) =>
  cars.map(
    (fillCars) =>
      `This ${fillCars.brand} from ${
        fillCars.model
      } costs $ ${Intl.NumberFormat().format(fillCars.price)}`
  );
console.log("All Cars:");
console.log(list(cars));
