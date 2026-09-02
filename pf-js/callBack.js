/** Call backs
 * Es una funcion que se pasa como argumento a otra funcion, para ser ejecutada en el momento que la funcion que recibe el callback lo decida
 * ? Funciones ciudadanos de primera clase
 * Todas las funciones son tratadas como si fueran un valor
 */

function procesarPago(nombreCliente, callback, cuenta) {

    const saldoAPagar = callback(cuenta);
    console.log(`El cliente ${nombreCliente} debe pagar ${saldoAPagar} despues de impuestos `);
}

/** Opciones para la funcion de callback
 * 1. Crear una funcion aparte y luego mandarla como argumento
 * 2. Crear una funcion anonima dentro de los parentesis de la funcion proncipal
 */

function addIva(cuenta) {
    return cuenta * 1.16;
}

procesarPago("Javier", addIva, 2000);
//Procesar pago con funcion anonima, 2 ejemplos uno con function y otro con arrow function

console.log("----------------------------------- Callback con funcion anonima -----------------------------------")
procesarPago("Jose", function (cuenta) { return cuenta * 1.2 }, 2000);

console.log("----------------------------------- Callback con arrow funcion -----------------------------------")
procesarPago("Jose", (cuenta) => cuenta * 1.3, 2000); //Es una variable temporal como se llame la funcion interior 
