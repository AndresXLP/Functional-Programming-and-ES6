const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

const doubleArr = arr.map((arr) => arr * 2);
console.log(doubleArr);

// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]

const filterArr = arr.filter((arr) => arr % 2 === 0);
console.log(filterArr);

// utilizar el método reduce para sumar todos los elementos
// 21

const totalArr = arr.reduce((acc, arr) => acc + arr, 0);
console.log(totalArr);
