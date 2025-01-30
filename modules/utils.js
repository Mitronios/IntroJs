export const calculadora = () => {
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

//Tipos de export
//export "normal", se puede usar varias veces
export const variable = "Hola";

//export "default"
const utilFile = "Name";
export default utilFile;
// Este export se puede poner una sola vez por archivo
