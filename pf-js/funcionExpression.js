// Funcion Expression
//Ejemplo
const getTriangleArea = function (base, heigth) {
    return (base * heigth) / 2;
}

let area = getTriangleArea(20, 24);
console.log(`El area de un triangulo de base 20 y altura 24 es ${area}`);

//Ejercicio
/**function que solicite un numero ese numero representa el limite de una serie mostrar que numeros son pares o impares en una serie de 1 hasta el numero ingresado que sea una function expression
 */

const numerosPareImpar = function (numeros) {
    for (let i = 1; i <= numeros; i++) {
        if (i % 2 == 0) {
            console.log(`El numero ${i} es un numero Par`)
        }
        else {
            console.log(`El numero ${i} es un numero InPar xd`)
        }
    }
}

const limNumero = +prompt("Ingresa cuantos numeros");
//Unario más (+) - El operador unario más (+) precede a su operando y evalúa a su operando intentando convertirlo en un número, si aún no lo es.
//? +prompt = Convierte la entrada a numero
console.log(`Tenemos ${limNumero} numeros y:`);
numerosPareImpar(limNumero);