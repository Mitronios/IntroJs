const products = ["Cap", "T-shirt", "Shoes"];

const showProduct = (product) => {
  console.log(`Producto: ${product}`);
};

//Cada vez que quiero mostrar un producto tendría que repetir una línea de código
showProduct(products[1]);
showProduct(products[0]);
showProduct(products[2]);
// Aquí entran en acción los bucles
/*
for()
while()
do while()
*/
//En tanto sea menor a 10 ingresará al console.log en cada ejecución, a esto le llamamos iterar (iteraciones)
for (let index = 0; index < 10; index = index + 1) {
  console.log("Dentro del for");
}

console.log("No me ejecuto hasta que el for termine"); // Este console.log se ejecuta de manera síncrona, únicamente cuando el for termina

// Otra manera de hacerlo
for (let index = 0; index < products.length; index++) {
  const product = products[index];
  showProduct(product);
}

// Bucle while
let counter = 0;
while (counter < 10) {
  console.log("Dentro del while");
  if (counter > 5) {
    counter = counter + 2;
  } else {
    counter = counter + 1;
    // counter++
    // counter += 1
    // counter =+ 1 -> cpunter = 1 + counter
  }
}

// En el bucle Do while, ejecutará la instrucción al menos una vez y continuará hasta que se cumpla una condición

// For of -> para arrays

for (const product of products) {
  console.log(product);
}

const data1 = ["test", "test1"];
const data2 = ["data", "info"];

// const mergeInfo = [].concat(data1, data2) // manera antigua de hacerlo
const mergeInfo = [...data1, ...data2]; // ["test", "test1", "data", "info"]

const numbers = [1, 2, 3, 4, 5];
let doubleNumbers = [];
for (const number of numbers) {
  // doubleNumbers.push[number * 2];
  doubleNumbers = [...doubleNumbers, number * 2];
}

console.log(doubleNumbers);

const users = [
  "user1@keepcoding.com",
  "user2@discord.com",
  "user3@keepcoding.com",
];

let hideEmailsKeepcoding = [];
let keepcodingUsers = [];

for (const user of users) {
  if (user.includes("@keepcoding")) {
    keepcodingUsers = [...keepcodingUsers, user];
    hideEmailsKeepcoding = [
      ...hideEmailsKeepcoding,
      user.replace("@keepcoding.com", "*****"),
    ];
  } else {
    hideEmailsKeepcoding = [hideEmailsKeepcoding, user];
  }
}
console.log(hideEmailsKeepcoding, keepcodingUsers);
