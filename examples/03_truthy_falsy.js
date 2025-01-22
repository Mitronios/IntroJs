// const value1 = 1; //truthy
// const value1 = undefined; //falsy
// const value1 = ""; //falsy
// const value1 = " "; //truthy
// const value1 = NaN;//falsy
const value1 = null; //falsy

const value2 = 0;
isTrue = "Truthy value";
if (value2) {
  isTrue; // al ser valor true cumple la condición e ingresa al if
} else {
  isTrue = "False!!";
}
console.log(isTrue);

const message = value1 ? "Existe el value1" : "No existe";
console.log(message);

const streetNumber = undefined; // campo variable con prompt, por ejemplo:

// const shopAddres = street || "No incluido"; //Esto no me permite guardar el 0 en caso que sea necesario
const shopNumber = streetNumber ?? "No incluido"; //esto funciona para el cero, verifica null y undefined
console.log(shopNumber);

// Métodos
const str = "Hola mundo!     ";
console.log(str.length);
console.log(str.includes("Hola"));

// Limpieza de datos
let username = "    Kevin";
let email = " Kevin@Test.Com  ";
username = username.trim();
username = username.toLowerCase();

email = email.trim().toLowerCase();

if (username === "kevin" && email == "kevin@test.com") {
  console.log("Tienes acceso");
} else {
  console.log("No tienes acceso");
}

// email = email.replace("@test.com", "*****"); //Lo reemplaza por *****
email = email.replaceAll("e", "-"); // todas las e por  -
console.log(email);

const promptPrice = prompt("Introduce el precio de un producto"); //Siempre devuelve un string o null

// const price = parseInt(promptPrice ?? 0); // lo convertimos en Int, en caso de null me devuelve 0
// const price = Number(promptPrice ?? 0); // Otra ,amera de convertir a numero
const price = +promptPrice ?? 0;

console.log(price);
