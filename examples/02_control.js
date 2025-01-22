//'estructuras' de control, condicionales

const firstProductName = "T-shirt";
const firstProductPrice = 15;
const firstProductQuantity = 2;

const capProductName = "Cap";
const capProductPrice = 35;
const capProductQuantity = 2;

let message = "";
const sameQuantity = firstProductQuantity === capProductQuantity; //true or false
// -> boolean
if (firstProductPrice < capProductPrice) {
  const nota = "ejemplo"; // accesible únicamente en el scope
  message = `${firstProductName} product has a better price than ${capProductName}`;
} else if (sameQuantity) {
  message = "same amount";
} else {
  message = `${firstProductName} product is more expensive than ${capProductName}`;
}

//Refactor
const sameName = firstProductName === capProductName;
if (firstProductPrice < capProductPrice && sameQuantity && !sameName) {
  //   console.log("This is clearer");
}

message =
  firstProductPrice < capProductPrice
    ? `${firstProductName} product has a better price`
    : `${capProductName} is more expensive`;

console.log(message);

// Atención no es recomendable andar poniendo console.logs por todos lados, lo ideal es tener una variable
//y usar console.log sobre esa variable, un solo console.log. Esto de momento que estamos aprendiendo y
// console.log es nuestra manera de mostrar por consola lo que hacemos

// Switch
let day = "";
let msg = "";
switch (day) {
  case "Monday":
  case "Tuesday":
    msg = "Hay clase de JS";
    break;
  default:
    msg = "No hay clase";
}

if (day === "Monday" || day == "Tuesday") {
  console.log(msg);
} else {
  console.log(msg);
}
