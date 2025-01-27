/*
Recorrer el siguiente array e imprimir únicamente los libros
que fueron impresos luego de los años 2000.

Utiliza un solo console.log para mostrar el resultado por la consola.
Debes devolver un string
*/

const books = [
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

const books2000s = (booksList) => {
  let after2000s = [];
  for (const book of booksList) {
    if (book.year > 2000) {
      after2000s = [...after2000s, book.title];
    }
  }
  return after2000s.join(", ");
};

const latestBooks = books2000s(books);
console.log(latestBooks);
