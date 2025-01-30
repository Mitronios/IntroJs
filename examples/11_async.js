//Hasta ahora hemos ejecutado código síncrono, este se ejecuta línea a línea
const product1 = "test";

const data = [1, 2, 3];

if (data.length > 1) {
  for (const element of data) {
    console.log(element);
  }
}
//Todas estas líneas de código se ejecutan línea a línea, el for continúa
//hasta completar el ciclo y el código que estuviera escrito después,
//NO se ejecutará hasta que termine de ejecutarse el código de arriba

/* console.log("Me ejecuto primero");

setTimeout(() => {
  //se ejecutará de manera asícrona
  console.log("Dentro de set timeout, me ejecuto luego de un segundo");
}, 1000); //se expresa en milisegundos

 console.log("Final script, me ejecuto antes que timeout");*/

const getProducts = (callBack) => {
  setTimeout(() => {
    const products = [{ name: "T-shirt", price: 12 }];
    callBack(products);
  }, 2000); //Se ejecutará la función callback cuando se cumpla el tiempo
};

//manera antigua de gestionar errores
getProducts((products) => {
  if (error) {
    return console.log("Hay error con los productos");
  }
  console.log(products);
  getProducts(products[0].name, (error, product) => {
    if (error) {
      console.log("Error en detalle del producto");
    } else {
      console.log(product);
    }
  });
}); // Este tipo de código se denomina: "callback Hell"

//Aquí entran las "Formas modernas": promises y async await
//Promesas

const getProductsP = () => {
  return new Promise((resolve) => {
    //resolve es una función callback
    setTimeout(() => {
      const products = [{ name: "T-shirt", price: 12 }];
      resolve(products); //resolve siempre debe devolver lo que queremos mostrar u obtener
    }, 2000);
  });
};

const getProductP = (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = { name: "T-shirt", price: 12, stock: null };
    }, 5000);
  });
};
//Como se ejecutan las promesas
const promise = getProductP();

getProductsP()
  .then((products) => {
    //recibe otro callback que devuelve lo que se resuelve en la promesa
    console.log(products);
    return getProductP(products[0].name); //también podemos omitir el return colocando todo en una línea
    //para capturar errores usamos catch
  })
  .then((detail) => {
    console.log(detail);
  });

//Esta sintaxis es más común
getProductsP()
  .then((products) => getProductP(products[0].name))
  .then((detail) => {
    console.log(detail);
  })
  .catch((error) => {
    console.log(error);
  }); //manejo de errores con catch

//Aquí entra async/await
const main = async () => {
  try {
    const products = await getProductsP();
    const detail = await getProductP(products[0].name);
    console.log(detail);
  } catch (error) {
    console.log(error);
  }
}; //manejo de errores con try/catch

main(); //esto es una promesa y también se puede utilizar .then, .catch, .finnaly
