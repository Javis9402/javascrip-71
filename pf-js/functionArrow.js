/**Funciones flecha (arrow funccion)
 * !importante 
 * Retur Implicito
 * Quiere decir que si tu funcion se puede escribir en una sola linea sin necesidad de llaves no es necesario poner la palabra return la expresion a la que apunte la flecha sera retornada
 * 
 * Expresiones lambda
 */

const addTwoNumbers = (a, b) => a + b;
let result = addTwoNumbers(4, 5);
console.log(`El resultado de sumar 4 + 5 es: ${result}`);

const eventOrOdd = (limit) => {
    let total = 0;
    for (let i = 0; i < limit; i++) {
        if (i % 2 == 0) {
            console.log(`${i} es Par`);
        } else {
            console.log(`${i} es Inpar`);
        }
        total += i;
    }
    return total;
}

console.log(eventOrOdd(10));