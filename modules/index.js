import utilFile, { variable } from "./utils"; {calculadora, variable} from "./utils.js";
//Cuando trabajamos con Js debemos incluir la extensión
//el export normal o "nombrado" se importa con {} 
// y debe tener el mismo nombre, se puede usar un alias ({calculadora as calc})
//el export default no requiere {}
//se puede importar usando otro nombre

console.log(utilFile, variable);
const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5)); // Debería imprimir undefined
console.log(miCalculadora.restar(2)); // Debería imprimir undefined
console.log(miCalculadora.multiplicar(4)); // Debería imprimir undefined
console.log(miCalculadora.dividir(2)); // Debería imprimir undefined
console.log(miCalculadora.sumar(10)); // Debería imprimir undefined
console.log(miCalculadora.total()); // Debería imprimir 16
