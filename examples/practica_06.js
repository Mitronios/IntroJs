const calculadora = () => {
  let result = 0;

  const sumar = (number) => {
    result = result + number;
  };

  const restar = (number) => {
    result = result - number;
  };

  const multiplicar = (number) => {
    result = result * number;
  };

  const dividir = (number) => {
    result = result / number;
  };

  const total = () => {
    return result;
  };

  return {
    sumar,
    restar,
    multiplicar,
    dividir,
    total,
  };
};

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5)); // Debería imprimir undefined
console.log(miCalculadora.restar(2)); // Debería imprimir undefined
console.log(miCalculadora.multiplicar(4)); // Debería imprimir undefined
console.log(miCalculadora.dividir(2)); // Debería imprimir undefined
console.log(miCalculadora.sumar(10)); // Debería imprimir undefined
console.log(miCalculadora.total()); // Debería imprimir 16
