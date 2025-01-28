// const Twilight = { title: "Twilight", author: "Stephenie Meyer", year: 2005 };
//destucturado
const {
  year,
  author,
  rating: { rottenRomatoes },
} = {
  title: "Twilight",
  author: "Stepjenie Meyer",
  year: 2005,
  rating: {
    rottenRomatoes: 6,
    filmaFfinity: 6,
  },
};

console.log(year, author, rottenRomatoes);

const [book1, book2] = [
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

console.log(book1, book2);

//Mas ejemplos
const getAdminUser = () => {
  return { name: "admin", role: "ADMIN", email: "test@admin.com" };
};

const { role } = getAdminUser(); // {name: "admin", role: "ADMIN", email: "test@admin.com"}
//estaríamos obteniendo role directamente

const shows = [
  {
    id: 1,
    name: "Under the dome",
    genres: ["Drama", "Science-Fiction"],
    rating: 2,
  },
  {
    id: 2,
    name: "Game of thrones",
    genres: ["Drama"],
    rating: 8,
  },
  {
    id: 3,
    name: "Friends",
    genres: ["Comedy"],
    rating: 6,
  },
];

const showRender = ({ name, genres }) => {
  return `
    <h2>${name}</h2>
    <p>${genres.join(", ")}</p>
  `;
};

//document.write(showRender);
//

const csvProducts =
  "T-shirt,10,Amazon\nCap,5,Google\nPants,15,Amazon\nShoes,20,Google";

/* const processCSV = (csv) => {
  //"T-shirt,10,Amazon", "Cap,5,Google", "Pants,15,Amazon", "Shoes,20,Google"
  const lines = csv.split("\n"); // ["T-shirt,10,Amazon", "Cap,5,Google", "Pants,15,Amazon", "Shoes,20,Google"]
  for (const line of lines) {
    // "T-shirt, 10, Amazon"
    const info = line.split(","); // ["T-shirt", "10", "Amazon"]
    products = [
      ...products,
      {
        name: info[0],
        price: info[1],
        store: info[2],
      },
    ];
  }
  return products;
}; */

//Con destructuring
const processCSV = (csv) => {
  //"T-shirt,10,Amazon", "Cap,5,Google", "Pants,15,Amazon", "Shoes,20,Google"
  let products = [];
  const lines = csv.split("\n"); // ["T-shirt,10,Amazon", "Cap,5,Google", "Pants,15,Amazon", "Shoes,20,Google"]
  for (const line of lines) {
    // "T-shirt, 10, Amazon"
    const [name, price, store] = line.split(","); // ["T-shirt", "10", "Amazon"]
    products = [
      ...products,
      {
        // name: name,
        name, //Cuando el nombre de la propiedad y la variable que se le asigna son el mismo se puede omitir para simplificar
        price: parseInt(price),
        // store: store,
        store,
      },
    ];
  }
  return products;
};
const products = processCSV(csvProducts);
console.log(products);

//Recordemos como concatenar arrays sin modificar el dato original
const arr1 = [1, 2, 3, 4];
const arr2 = ["as", "test"];

const randomArray = [arr1, arr2]; //esto no es lo mismo que
const randArray = [...arr1, ...arr2]; //esto

console.log(randArray, randomArray);

//Cuando hacemos lo mismo con objetos hablamos mas de un merge que una concatenación

const infoGeneral = {
  bootcamp: "Keepcoding",
  edicion: "web18",
  name: "General",
};

let module1 = {
  name: "Js",
  ...infoGeneral, // La posición es importante, aquí el name de general permanece
};

let module2 = {
  ...infoGeneral, // hacer esto sobreescribirá name de info general por el name de module, en una copia limpia
  name: "HTML",
};

const { edicion, ...module3 } = { ...infoGeneral, name: "Modelado de datos" }; // con este destructuring remuevo edicion

//delete module3.edicion;

console.log(module1, module2, module3);
