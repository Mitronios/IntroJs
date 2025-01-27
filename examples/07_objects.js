const firstProductName = "T-shirt";
const firstProductQuantity = 12;
const firstProductPrice = 15;

const secondProductName = "Cap";
const secondProductQuantity = 12;
const secondProductPrice = 12;

//Creando objetos

const firstProduct = {}; //Iniciandolo vacío
console.log(firstProduct, typeof firstProduct);

//Luego añado el contenido de esta manera
firstProduct.name = "T-shirt";
firstProduct.quantity = 12;
firstProduct.price = 15;

console.log(firstProduct);

//Otra forma de hacerlo
const secondProduct = {
  name: secondProductName,
  quantity: secondProductQuantity,
  price: secondProductQuantity,
  //   country-city: "ES/Madrid" // aquí JS piensa que quiero restar country de city por eso comillas
  "country-city": "ES/Madrid",
};

console.log(secondProduct);

//Accediendo a las propiedades
console.log(secondProduct.name, secondProduct["country-city"]); // en estos casos particulares ingresamos con []

const getProductInfo = (product, attr) => {
  return product[attr];
};

//Distintas maneras de uso
const productNAme = getProductInfo(secondProduct, "name");
getProductInfo(secondProduct, "price");

//Por lo general se ingresa usando la notación del .
//El uso de [] se reserva a obtener los datos por función o usando la propiedad entre comiilas, "country-city"

const thirdProduct = {
  name: "Shoes",
  quantity: 12,
  price: 60,
  sizes: ["S", "M", "L"],
  attributes: {
    color: "red",
    brand: "nike",
  },
};

console.log(thirdProduct.sizes);
console.log(thirdProduct.attributes.brand);

const shows = [
  {
    id: 1,
    name: "Under the dome",
    genres: ["Drama", "Science-Fiction"],
    rating: 2,
  },
  {
    id: 2,
    name: "Game oh thrones",
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

console.log(shows[0].genres[1]);

console.log(shows[0].rating + shows[1].rating);

let totalRating = 0;
for (const show of shows) {
  console.log(show.rating);
  totalRating = totalRating + show.rating;
}
console.log(totalRating / shows.length);

const renderShow = (show) => {
  return `
      <h2>${show.name}</h2>
      <p>${show.genres.join(", ")}</p>
    `;
};

let template = "";
for (const show of shows) {
  template = template + renderShow(show);
}

// document.write(template);
console.log(template);

//Inmutabilidad
// Este ejemplo genera una copia que al momento de ser modificado modifica el original
//Esto es algo que debemos evitar, recordar que esta forma de hacer la copia hará que se comparta su ubicación en memoria
const user = {
  email: "test@test.com",
  role: "USER",
  app: "keppcoding",
  modules: ["js", "html", "react"],
  info: {
    name: "test",
    surname: "surname",
  },
};

// const admin = user;

// admin.email = "admin@test.com";
// admin.role = "ADMIN";

// console.log(admin, user);

//Como lo solucionamos?
//1 JSON.stringigy/parse

//const admin = JSON.stringify(user);
const admin = JSON.parse(JSON.stringify(user)); //para hacer parse ya debe ser un string

admin.email = "admin@test.com";
admin.role = "ADMIN";
//También con el spread operator {...user};
//admin.info.name = "admin"; //Aquí vemos un caso en la que hay una anidación a un nivel más profundo y el spread operator ya no es efectivo
//Para solucionarlo con el spread haríamos esto
// const admin = {
//   ...user,
//   info: {
//     ...user.info,
//   },
// }; Object.assign({}, user) //generalmente lo usaremos si requiero copiar algo que contenga funciones o valores null

const admin = structuredClone(user);
admin.email = "admin@test.com";
admin.role = "ADMIN";
admin.info.name = "admin";

console.log(admin, user); //User conserva su valor original

//Dentro de un objeto puedes poner cualquier cosa que sea un objeto
const printer = () => {
  return None;
};

//Borrar propiedades
delete admin.modules;

console.log(admin, user);
// console.log(JSON.stringify(user, null, 2));

//Breve comentario sobre clases
class Product {}

console.log(new Product());
//Las clases se traducen a objetos en Js, ayudan a la integración y familiaridad con
//la programación orientada a objetos.
