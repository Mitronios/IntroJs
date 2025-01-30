const numbers = [1, 2, 3, 4, 5];
//Tradicionalmente para recorrer este array de números podríamos usar un for, ya sea for o for of
for (let index = 0; index < numbers.length; index++) {
  const number = numbers[index];
  console.log(number);
}

//For each
numbers.forEach((value, index) => {
  console.log(value, index);
}); // no devuelve nada, recibe una función callback
//Su principal función es recorrer el array de manera eficiente

//Entendiento forEach
const forEach = (list, callBack) => {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    callBack(element, index);
  }
};

//Se ejecutaría de esta manera, se apoya en el uso de los callback
forEach(numbers, (value, index) => {
  console.log(value, index);
});

//map, filter, estos métodos incluyendo forEach funcionan usando los mismos principios
const double = numbers.map((number, index) => {
  console.log("Dentro del map", number, index);
  return number * 2; //Literalmente realiza un mapeo de todo el array posición por posición
});
//map nos devuelve un nuevo array, y siempre debemos retornar algo
// Equivalente con for of
const doubleForOf = [];
for (const number of numbers) {
  console.log(number);
  doubleForOf.push(number * 2);
}
//Simplificando
const doubles = numbers.map((number) => number * 2); //También a esto le puedo añadir métodos de array .join(" ") etc
//Función flecha de una sola lìnea siempre retorna, solo un parámetro se puede quitar parentesis
console.log(doubles);
//map siempre devuelve un array limpio

// Uso de filter
const lowerThan5 = numbers.filter((number) => {
  return number < 5; // también se puede escribir en una sola línea
}); //siempre se debe retornar una condición que se evalue en true or false

console.log(lowerThan5, numbers);

//Cuando usamos filter se puede también usar map luego de filter
const greaterThan5 = numbers
  .filter((number) => {
    return number > 5;
  })
  .map((number) => number * 2);

//Equivalente a filter con for of
const lowerThan5ForOF = [];
for (const number of numbers) {
  if (number < 5) {
    lowerThan5ForOF.push(number);
  }
}

//Aplicando los métodos

let books = [
  { title: "1984", author: "George Orwell", year: 1949 },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    year: 1967,
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
  },
  { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
  { title: "Twilight", author: "Stephenie Meyer", year: 2005 },
  { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
];

//Filter con destructuración
const titles2000 = books
  .filter(({ year }) => year > 2000)
  .map(({ title }) => title)
  .join(", ");

console.log(titles2000);

//Método Find
const twilight = books.find((book) => {
  return book.title === "Twilight";
}); // Nos permite iterar sobre todos los elementos de book hasta encontrar el que buscamos
//El uso de Find devolverá un booleano

// twilight.stock = 0; //ojo esto me modifica el valor original
//stock no existe en el objeto original, es una nueva variable
//hacerlo de esta manera me añade la nueva variable en cada elemento no solo en twilight
//Una variable nueva no tiene porque modificar el listado de referencia
//Forma correcta
//Colocar books a let para reasignarlo

books = books.map((book) => {
  if (book.title === "Twilight") {
    //buscamos el libro de Twilight
    return { ...book, stock: 0 }; //Devuelvo el mismo libro con la nueva propiedad
  } //el spread operator nos va a devolver siempre una copia limpia
  return { ...book, stock: 10 }; //Si no ingresa al if me agrega un stock de 10 al resto de libros
});

//función que define el stock en el listado
const setStock = (title, quantity) => {
  const book = books.find((book) => book.title === title); //si existe paso al map
  if (!book) {
    //evalua un bool
    //si no existe lanzo un error
    throw new Error("Book not found");
  }
  books = books.map((book) => {
    if (book.title === title) {
      return { ...book, stock: quantity }; //devuelvo una copia limpia y defino la cantidad
    }
    return { ...book }; // devuelvo la copia limpia con los valores no modificados
  });
};

//Usando try catch
try {
  setStock("Twilight", 100);
} catch (error) {
  //capturo el error para que no se detenga la ejecución del programa
  //   alert(error);
  console.error(error);
}

//comprobaciones rápidas
const hasStock = books.some((book) => {
  //Esto nos devuelve un bool según si se cumple o no la condición
  return book === 10;
}); // si alguno de ellos tiene 10 en stock es true, si no es false

const allStock = books.every((book) => {
  return book.stock === 0;
}); //si todos tienen stock a 0 es true y si alguno de ellos no entonces es False

console.log(books);

//Cuidado con la inmutabilidad
const accounts = [
  {
    user: "Kevin",
    money: 1000,
  },
  {
    user: "Test",
    money: 12222,
  },
];

// Reduce
//[1, 2, 3, 4, 5];  // acc =  accumalator
const total = numbers.reduce((acc, number) => {
  const result = acc + number;
  // return 1; //siempre retorna 1 en cada iteración
  return result;
}, 0);

console.log(total);

const user1 = accounts.find((account) => account.user === "Test");
user1.money + 10; //Esto está modificando el valor original, no es correcto cuidado!
//No usar find para modificar una variable diferente porque modificamos la original
console.log(`Money with bonus: ${user1.money}`);

const renderAccounts = accounts
  .map((account) => {
    return `${account.user}: ${account.money}$`;
  })
  .join(",");
