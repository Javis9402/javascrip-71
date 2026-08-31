/** Loop
 * For
 * Es una estructura de control repetitiva el bloque de codigo dentro de ella se va a repetir n veces
 * ? el bucle for cuenta con 3 partes dentro de los parentesis
 * ?1. Una variable que va actuar como contador, comunmente se le llama i
 * ?2. Es la condicion de ejecucion, esto quiere decir la condicion que mientras sea verdadera, el bucle se va a ejecutar
 * ?3. El incremento del contador
 * Nota: Se suele usar mucho para recorrer arrays
 */

const numeros = [
    12, 45, 7, 89, 23, 56, 34, 78, 91, 10, 67, 32, 4, 76, 54, 21, 98, 43, 65, 11, 87, 29, 50, 73, 16, 94, 38, 61, 8, 82, 27, 69, 14, 95, 41, 58, 3, 77, 36, 84, 19, 63, 47, 90, 25, 71, 6, 53, 80, 31, 99, 42, 17, 68, 35, 86, 22, 74, 9, 57, 93, 40, 15, 62, 28, 81, 5, 70, 48, 96, 24, 59, 33, 88, 13, 66, 44, 79, 2, 55, 97, 30, 18, 72, 46, 85, 20, 64, 39, 92, 1, 52, 26, 75, 49, 83, 37, 60, 51, 100];

for (let i = 0; i < numeros.length; i++) {
    console.log(`El numero en la posicion ${i} es ${numeros[i]}`);
}

console.log("=================================")

// Prueba de remplazo para tener ordenados los numeros de 0 a 99
for (let incremento = 0; incremento < numeros.length; incremento++) {
    numeros.splice(incremento, 1, incremento);
    console.log(`El numero en la posicion ${incremento} es ${numeros[incremento]}`);
}

let total = 0;
for (let c = 0; c < numeros.length; c++) {
    //Sintaxis tradicional
    // total= total + numeros[c];
    // Sintaxis Simplificada
    total += numeros[c];
    console.log(`El valor total acomulado es de ${total}`);
}
console.log(`La suma de los 100 elementos del array es ${total}`);

/**Ejercicio
 * 1. Usar un for para recorere el array de numeros
 * 2.En cada iteracion mostrar en consola si el numero es par o impar
 */

let resultado;
for (let i = 0; i < numeros.length; i++) {
     resultado = numeros[i]%2
     if(resultado == 0){
        console.log(`El numero ${numeros[i]} es un numero Par`)
     }
     else
     {
        console.log(`El numero ${numeros[i]} es un numero InPar xd`)
     }
}

