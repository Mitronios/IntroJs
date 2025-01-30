/*
Calcular precio total de todos los productos sumando los subtotales de cada uno,
(precio* cantidad).
Si total es menor a 50, muestra "Puedes agregar más productos"
si total está entre 50 y 100, muestra "Estás cerca de tu límite de compra"
si total es mayor a 100, muestra "Ház alcanzado tu límite de compra"

Muestra el total en un único console.log
*/

// Productos y cantidades
const productAName = "T-shirt";
const productAPrice = 20;
const productAQuantity = 2;

const productBName = "Cap";
const productBPrice = 35;
const productBQuantity = 1;

const productCName = "Socks";
const productCPrice = 10;
const productCQuantity = 3;

// Subtotal de cada producto
const subtotalA = productAPrice * productAQuantity;
const subtotalB = productBPrice * productBQuantity;
const subtotalC = productCPrice * productCQuantity;

// Total de la compra
const totalPrice = subtotalA + subtotalB + subtotalC;

// Mensaje
let message = "";
if (totalPrice < 50) {
  message = "Puedes agregar más productos.";
} else if (totalPrice <= 100) {
  message = "Estás cerca de tu límite de compra.";
} else {
  message = "Haz alcanzado tú límite de compra";
}

console.log(message);
