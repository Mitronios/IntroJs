const firstProductName = "T-shirt";
const firstProductPrice = 15;
const firstProductQuantity = 2;

const capProductName = "Cap";
const capProductPrice = 35;
const capProductQuantity = 2;

const firstProductTotalPrice = firstProductPrice * firstProductQuantity;
const secondProductTotalPrice = capProductPrice * capProductQuantity;

// Functions
console.log("Hola"); //Si requerimos imprimir hola muchas veces y no queremos repetir console.log muchas veces
// Encapsulamos el comportamiento en una función y lo ejecutamos cuantas veces sea necesario
/*
1.Definición: palabra reservada function
2. Que retorna: utilizamos la palabra reservada return
3. Parámetros: que recibe mi función o que necesita para funcionar
*/

saludo(); // Por como funciona el hoisting esto funciona
function saludo() {
  console.log("hola");
}

saludo(); // Para invocar una función debemos 'Ejecutarla' para ello nombramos la función con ()
// Ahora ejecutamos saludo las veces que sean necesarias y donde sea necesario usarlo

// const greetings = function () {

// };

// greetings();//esto no funciona porque es una arrow function y usa const
// Arrow function
const greetings = () => {
  console.log("Hello!!");
};

// const calc = () => {
//   const result = firstProductPrice * firstProductQuantity;
// };
//Esta manera no es muy efectiva ya que tendríamos que crear una funcion para cada producto
// Evitaremos esto pasando parámetros a nuestra función

const calc = (price, quantity) => {
  const result = price * quantity;
  return result;
};

const calcOneLine = (price = 0, quantity = 0) => price * quantity; // devuelve result sin usar return
//Es una característica de las arrow functions, generalmente se usa con funciones cortas
//sin embargo si es necesario y se desea incluir más lineas,
//se debe envolver el código después de la flecha entre paréntesis

const resultFirstProduct = calc(firstProductPrice, firstProductQuantity);
const resultSecondProduct = calc(capProductPrice, capProductQuantity);
const resultNoProduct = calcOneLine(); // nos devolverá undefined, para evitarlo le doy un valor inicial a los parámetros
