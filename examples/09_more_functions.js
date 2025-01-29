const foo = (...params) => {
  console.log(params);
};

foo(1, 2, 3, true, "Texto");
//Esto nos permite recuperar todos los parámetros que recibirá nuestra función
//es muy útil si desconozco los parámetros que me llegan.
//Oh si necesito realizar algo espefíco con esos parámetros

const calc = (operation, ...params) => {
  let result = 0;
  for (const param of params) {
    if (operation === "sum") {
      result = result + param;
    } else if (operation === "sub") {
      result = result - param;
    }
  }
  return result;
};

console.log(calc("sum", 1, 2, 3, 20, 30));
console.log(calc("sub", 1, 2, 3, 20, 30));

//Cierres
//Tenemos una función que contiene variables internas que pueden ser modificadas
//por otros métodos o funciones dentro de esa función
const counter = () => {
  let count = 0;

  const increment = () => {
    count = count + 1;
  };

  const getCount = () => {
    return count;
  };

  return {
    // count,// esto es una mala práctica ya que me retorna count en su valor inicial
    //Es mejor obtener count a través de una función
    //increments: increment,
    increment,
    getCount,
  };
};

const player1Score = counter(); // Retorna una función {increment, getCount}
player1Score.increment();
player1Score.increment();
player1Score.increment();
// console.log(player1Score.count);
const player1Value = player1Score.getCount();
console.log(player1Value);

const player2Score = counter();
const player2Value = player2Score.getCount();
console.log(player2Value);

// Más ejemplos
const storeProducts = [
  {
    id: "p001",
    name: "T-shirt",
    price: 20,
    quantity: 2,
  },
  {
    id: "p002",
    name: "Cap",
    price: 5,
    quantity: 1,
  },
  {
    id: "p003",
    name: "Jeans",
    price: 40,
    quantity: 1,
  },
];

const cart = () => {
  let products = [];

  const addProduct = (product) => {
    products = [...products, product];
  };

  const listProducts = () => {
    return products;
  };

  return {
    addProduct,
    listProducts,
  };
};

const user1 = cart();
user1.addProduct(storeProducts[1]);

const user2 = cart();

for (const product of storeProducts) {
  if (product.price <= 20) {
    user2.addProduct(product);
  }
}

console.log(user1.listProducts(), user2.listProducts());

console.clear();

//casos especiales
const operations = (num1, num2, operation = "suma") => {
  let result = 0;
  if (operation === "suma") {
    result = num1 + num2;
  } else if (operation === "resta") {
    result = num1 - num2;
  }
}; // Para continuar definiendo todas las operaciones, tendríamos muchas líneas de codigo y además
//cada if, if else añade más complejidad, para el testing, para el mantenimiento de la función y su rendimiento.

//test
operations(1, 2); // 3 por defecto
operations(1, 2, "resta"); // -1

//Cambiando el enfoque. mejorando las prácticas

const suma = (num1, num2) => num1 + num2; // función flecha en una sola línea retorna automáticamente

const resta = (num1, num2) => num1 - num2;

const operationsV2 = (num1, num2, operation) => {
  return operation(num1, num2);
};

//const result1 = operationsV2(1, 5, suma);
//const result2 = operationsV2(1, 5, resta); // A esto se denomina función "callBack"
//console.log(result1);
//console.log(result2);

let result = operationsV2(1, 5, resta); // pasamos la definición no la ejecución de la función
result = operationsV2(1, 5, (num1, num2) => num1 * num2); //Función anónima; callBack.

console.log(result);
