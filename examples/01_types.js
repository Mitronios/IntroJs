// Palabras reservadas, const -> hace referencia a una constante, para variables que no deben cambiar

const product = "T-shirt";
const quantity = 10;

console.log(product); // console.log() nos permite mostrar la variable en pantalla, equivalente a print de py

const secondProduct = "Cap"; // Utilizamos la convención camel case

//Palabra reservada, let -> para variables que necesitan cambia durante la ejecución del código
let secondProductQuantity = 20;
console.log(secondProductQuantity);

// Reasignamos valor
secondProductQuantity = 10;
console.log(secondProductQuantity);

// Comentarios de una línea
/*asdasdasdasda
comentarios multi-línea
asdasdasda*/

let message = "Hello Keepcoder";
// Hello from"Keepcoding" intro JS
message = 'Hello from "Keepcoding" intro JS';
otherMessage = "I don't know";
// Uso de cmillas simples o dobles

// tempplate literals, me permiten escribir strings en multi línea, similar a f string de py
const template = ` 
Hi!

Hello there!

How
    you     
        doing?
`;

const otherTemplate = `
Product: ${product}
Quantity: ${quantity}
`;

const noTemplate = "\nProduct: " + product + "\nQuantity: " + quantity;

console.log(otherTemplate);
console.log(noTemplate);

// Ojo con los decimales, es mejor sumar los enteros y dividirlos por 100 o 1000 según corresponda

// Numbers, floats
const discount = 2.25;

console.log(typeof discount);

const soldOut = true; // boolean
const inDiscount = false;

console.log(typeof inDiscount);

// null, undefined
const stock = null; //Valor que representa la ausencia de...
const noProdcut = undefined; //No ha sido definido
console.log(typeof stock, typeof noProdcut);

// stock = Infinity; //representa el infinito

let notANumber = NaN;
console.log(typeof notANumber);

notANumber = false;
console.log(typeof notANumber);
// JS nos permite reasignar el tipo de valor de number a bool o a otro tipo pero noe s buena practica cuidado!

//operadores
const firstProductName = "T-shirt";
const firstProductPrice = 15;
const firstProductQuantity = 2;

const capProductName = "Cap";
const capProductPrice = 35;
const capProductQuantity = 2;

const suma = firstProductPrice + capProductPrice;
console.log(suma);

const totalFirstProduct = firstProductPrice * firstProductQuantity;

const total = totalFirstProduct + capProductPrice * capProductQuantity;

/* módulo, 
comparación, 
lógicos 
*/
console.clear(); //Esto nos quita los console log anteriores y permite mostrar solo los nuevos.

console.log(true + true); // 2
console.log(20 % 0); // 0

console.log(12 == 12); // true or false según corresponda
console.log("12" == 12); // Esto dará true por como se comporta el lenguaje
console.log("12" === 12); // Esto si dará false ya que también verifica el tipo
console.log("12" !== 12); // Mismo caso que de comparación verificando tipo

console.log(12 <= 12); //True

console.log(firstProductPrice > capProductPrice); // false

const invalidPrice = NaN;
console.log(isNaN(invalidPrice)); // true

// && -> and -> y
// ||->  OR -> o

//false                                   //true
console.log(
  firstProductPrice > capProductPrice &&
    firstProductQuantity === capProductQuantity
); //false

console.log(null === null);
console.log(undefined === undefined);

const thirdProduct = "Pants",
  thirdProductPrice = 12,
  thirdProductQuantity = 1;

/* 
Esto es equivalente a lo de arriba
const thirdProduct == 'Pants';
const thirdProductPrice = 12;
thirdProductQuantity = 1;
*/

console.log("12" === " 12"); //false porque el espacio cuenta

const isOnline = true;
console.log(!isOnline); //false
