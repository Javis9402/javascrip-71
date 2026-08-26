/**
 * Loops
 * Son estructuras de control, que nos permiten repetir n cantidad de veces un bloque de codigo {}
 * 
 * ?Tenemos 3 grandes loops
 * ?While
 * ?Do While
 * ?For
 */

/**
 * ?While
 * Es loop que se ejecuta mientras una condicion sea verdadera en cuanto esta condicion se vuleve falsa PARA
 * !Importante
 * !Necesita un contador extenerno o una forma de parar
 * !No olvidar actualiar el contador
 * !No generar un bucle infinito
 */

//1. Contador 
let counter = 0;

//2. Iniciamos el bucle 
while (counter <= 100) {
    console.log(counter);
    counter = counter + 1;
}
console.log(counter);

counter = 1;

// % Operador Modulo

while (counter <= 200) {
    if (counter % 2 == 0) {
        console.log(`El numero ${counter} es par`);
    }
    else {
        console.log(`El numero ${counter} es inpar`);
    }

    counter++;
}