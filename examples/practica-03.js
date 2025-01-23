/* 
Paso 1: Crea un array vacío llamado "numeros"
Paso 2: Agrega los números del 1 al 5. Pon entre el número 3 y 4 la palabra keepcoding
Paso 3: Imprime el contenido del array "numeros" en la consola
Paso 4: detecta con código si dentro del array está la palabra keepcoding. Si está imprime el mensaje este array no solo tiene números
Paso 5: Agrega el número 10 al inicio del array "numeros"
Paso 6: Imprime el contenido del array "numeros" en la consola
Paso 7: Utiliza el método indexOf para encontrar el índice de la palabra keepcoding
Paso 8: Elimina la palabra keepcoding a partir del índice anterior
Paso 9: Imprime el contenido del array "numeros" en la consola
Paso 10: Imprime la longitud del array "numeros" en la consola
*/

const numeros = [];
numeros.push(1, 2, 3, 4, 5);
numeros.splice(3, 0, "Keepcoding");
console.log(numeros);

if (numeros.includes("Keepcoding")) {
  console.log("Este array no tiene solo números");
}

numeros.unshift(10);
console.log(numeros);

console.log(numeros.indexOf("Keepcoding"));

const prevIndex = numeros.indexOf("Keepcoding");
numeros.splice(prevIndex, 1);
console.log(numeros);

console.log(numeros.length);

// Ejercicio 3.1

const input = ["Downloads", "videos", "capture", "mp4"];

const transform = (list) => {
  return list.join("/");
};

console.log(transform(input));
