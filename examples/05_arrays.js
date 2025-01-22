console.log("05");
const firstProductName = "T-shirt";
const capProductName = "Cap";

//Js es muy flexible y hay que tener cuidado con los datos, verificar siempre que sea coherente
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
