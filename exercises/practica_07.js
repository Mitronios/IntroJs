/* Dado este listado de valores, crea una función que devuelva 
los números pares e impares en dos arrays diferentes.
Y luego mostrar el resultado de esa funcion que devuelve dos arrays 
haciendo destructuring.  */

const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, "", false, NaN];

const foo = (numList) => {
  const odds = numList.filter((number) => number % 2 !== 0 && number);
  const even = numList.filter((number) => number % 2 === 0 && number);

  return { odds, even };
};
//Considerar agregar una manera de controlar los valores que no son números

const { odds, even } = foo(numbers); // no devolver result sino un destructuring con par e impar
console.log(odds, even);
