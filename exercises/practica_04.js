/*
Dado este listado de valores, crea un programa que separe 
los números pares de los impares en dos arrays diferentes.
*/
const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, "", false, NaN];

const filterNumbers = (list) => {
  let evenNumbers = []; // Array para almacenar números pares
  let oddNumbers = []; // Array para almacenar números impares

  for (number of list) {
    if (Number.isFinite(number)) {
      if (number % 2 === 0) {
        evenNumbers = [...evenNumbers, number];
      } else {
        oddNumbers = [...oddNumbers, number];
      }
    }
  }
  return { evenNumbers, oddNumbers };
};

const { evenNumbers, oddNumbers } = filterNumbers(numbers);

console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);

//Ejercicio 4.1
/*
Crear un array bidimensional con 5 columnas y con 3 filas como las que aparece abajo

--*--
-***-
*****

Usa un solo console.log
*/

const tree = [["--*--"], ["-***-"], ["*****"]];

let showTree = "";
for (const section of tree) {
  showTree = `${showTree}${section}\n`;
}

console.log(showTree);

// Con una complejidad extra
const treeItems = [
  ["-", "-", "*", "-", "-"],
  ["-", "*", "*", "*", "-"],
  ["*", "*", "*", "*", "*"],
];

let myTree = "";
for (const treeItem of treeItems) {
  myTree = `${showTree}${treeItem.join("")}\n`;
}

console.log(myTree);

//Versión Pro
const symbols = [
  ["-", "-", "*", "-", "-"],
  ["-", "*", "*", "*", "-"],
  ["*", "*", "*", "*", "*"],
];

let message = "";
for (const row of symbols) {
  for (const symbol of row) {
    message += `${symbol}`;
  }
  message += "\n";
}

console.log(message);
