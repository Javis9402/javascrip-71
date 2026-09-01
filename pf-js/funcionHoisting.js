/**
 * Diferencia
 * Hoisting
 * Es un proceso por el cual las funciones declaration y las variables escritas con var, pasan a estar arriba en el proceso de ejecucion
 * Funcion Expression y Arrow Funccion no pasan por este poroceso
 * 
 * El Hoisting es algo muy propio de Java Scrip
 */

console.log(`Funcion Delcaration ${multiplyNumber(1,2)}`);
// console.log( addNumber(1,1));
// console.log(divideNumber(2,1));

const addNumber = function (a, b) {
    return a + b;
}

const divideNumber = (a, b) => a / b;

function multiplyNumber(a, b){ //hace HOSISTING
    return a * b;
}

console.log( addNumber(1,1));
console.log(divideNumber(2,1));