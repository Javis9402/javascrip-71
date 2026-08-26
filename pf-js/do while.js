/**
 * Do while
 * !El bucle do while siempre se ejecuta por lo menos una vez
 * al ejecutar primero y luego evaluar te permite tener una ejecucion garantizada
 * 
 * !necesita contador externo
 * !No debemos olvidar actualizar el contador
 */

let counter = 0;
do {
    console.log(counter);
    //Operador de suma y asignacion
    counter += 10;
} while (counter <= 100);
console.log(counter);

counter = 1;

do {
    if (counter % 2 == 0) {
        console.log(`El numero ${counter} es par`);
    }
    else {
        console.log(`El numero ${counter} es impar`)
    }
    counter++;
} while (counter <= 200);

console.log(`El contador final es ${counter}`);