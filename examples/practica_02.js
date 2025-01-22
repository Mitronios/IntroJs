/*
Crea un programa que determine si un usuario puede recibir una promoción basada en su selección de productos.

Instrucciones:
Crea dos variables que representen el nombre de un producto seleccionado por el usuario y la cantidad. (En nuestro caso será usando prompt).

Usa operadores lógicos para determinar si el usuario puede tener para una promoción especial:
Si selecciona un "T-shirt" y la cantidad es 2 o más, el mensaje será "¡Recibes un 10% de descuento en la segunda camiseta!".
Si selecciona un "Cap" y la cantidad es 3 o más, el mensaje será "¡Obtén una gorra gratis por la compra de 3!".
Si no cumple ninguna de las condiciones, el mensaje será "No hay promociones para esta selección".

Muestra el mensaje en un único console.log.
*/

//const selectedProduct = prompt("Ingresa el nombre del producto").toLowerCase();
//const selectedQuantity = prompt("Ingresa la cantidad").trim();

// const product = selectedProduct.trim();
// const quantity = parseInt(selectedQuantity);

// let message = "";
// if (product === "t-shirt" && quantity >= 2) {
//   message = "¡Recibes un 10% de descuento en la segunda camiseta!";
// } else if (product === "cap" && quantity >= 3) {
//   message = "¡Obtén una gorra gratis por la compra de 3!";
// } else {
//   message = "No hay promociones para esta selección";
// }

// Ejercicio adicional, encapsular el comportamiento de arriba en una función
// Si valor por defecto es null tolower y trim no funcionarán, se debe controlar
// function offers(product = null, quantity = 0) {
const offers = (product = null, quantity = 0) => {
  let msg = "";
  if (!product) {
    // return "Debe proporcionar el nombre de un producto"; //Este return me para la ejecución, me ayuda a evitar anidación de if
    throw new Error("Producto no válido"); //la segunda opción es lanzar un error
  }
  product = product.toLowerCase().trim();

  if (product === "t-shirt" && quantity >= 2) {
    msg = "¡Recibes un 10% de descuento en la segunda camiseta!";
  } else if (product === "cap" && quantity >= 3) {
    msg = "¡Obtén una gorra gratis por la compra de 3!";
  } else {
    msg = "No hay promociones para esta selección";
  }
  return msg;
};

// ejemplo de funcionamiento

const result = offers("prod1", 12);
console.log(result); // No hay promociones para esta selección
