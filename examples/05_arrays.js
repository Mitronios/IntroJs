console.log("05");
const firstProductName = "T-shirt";
const capProductName = "Cap";

//Js es muy flexible y hay que tener cuidado con los datos, verificar siempre que sea coherente
//- - - - >    //     0           1            2       3
const products = ["T-shirt", capProductName, "Shoes", "TV"];
const prices = [1, 2, 3, 40];

/* En un array podemos realizar estas acciones
    1. Acceder a sus elementos
    2. Añadir elementos a la lista
    3. Borrar elementos de la lista
    4. Modificar su orden
*/
//1. Acceder
console.log(products[3]);
console.log(`
    Producto1: ${products[0].toLowerCase()}
    Producto2: ${products[2]}
`);

//2. Añadir
products.push("PS5"); //push añade elementos a nuestro array al final de este
//products.unshift("PS4"); //añade elementos al inicio del array
console.log(products);

//3. Borrar
products.pop(); //Borra el último elemento
products.shift(); //Borra el primer elemento
//Cuidado con estos métodos debemos ser cautelosos en su uso

//4. Modificar orden
console.log(products.reverse()); //invierte la lista
console.log(products.includes("TV")); //devolvera un bool
console.log(products.indexOf("TV")); //Me devuelve el índice del elemento, si no existe devuelve -1
//["TV", "Shoes", "Cap"]

//Borrar un producto específico
const shoesPosition = products.indexOf("Shoes"); //1
products.splice(shoesPosition, 1); //start, deleteCount
console.log(products);

//Separando elementos
const csvItem = "PS5,Switch,Xbox,PC,PSP";
const csvProducts = csvItem.split(","); //Me separa cada elemento separado por la ,
console.log(csvProducts);
csvProducts.pop();
csvProducts.shift();
//Removimos el primer y último elemento

const newCsvItem = csvProducts.join(",");
console.log(newCsvItem);
//Devolver el nuevo csv sin el primer y último elemento

/*
!IMPORTANTE!
*/
// Imaginemos que hay un carrito 1 y quiero copiar sus productos
const productUser1 = ["TV", "PC", "PS5"];
// Carrito2
const productUser2 = productUser1;

const addProduct = (newProduct, productList) => {
  productList.push(newProduct);
};

addProduct("Cap", productUser2);
console.log("1", productUser1);
console.log("2", productUser2);
// Esto es una mala práctica, estamos modificando ambas listas debido a que comparten la referencia en memoria
// Quiere decir que el carrito 1 tendría un articulo no deseado
// esto ocurre con los métodos de push, pop, etc... Como lo soluciono??
// La forma correcta es utilizando el 'spread' operator (...)
let productsUser2 = [...productUser1]; //esto crea una copia del array y devuelve un array nuevo
// Sería equivalente a crear una nueva lista vacía y hacer [].concat(productUser1)

// En programación funcional trabajaríamos así
const addProducts = (newProduct, productList) => {
  const newProductList = [...productList];
  productList.push(newProduct);
  return newProductList;
};
// No modifica valores fuera de su ámbito, debe retornar algo y siempre devuelve el mismo resultado

productsUser2 = addProducts("Cap", productsUser2); //Esto me permite tener control de lo que modifico

console.log(productsUser2);
