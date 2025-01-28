const foo = (...params) => {
  console.log(params);
};

foo(1, 2, 3, true, "Texto");
//Esto nos permite recuperar todos los parámetros que recibirá nuestra función, es muy útil
//si desconozco los parámetros que me llegan.
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
