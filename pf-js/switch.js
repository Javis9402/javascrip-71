/**
 * Swich
 * Es una estructura de control condicional pero a diferencia del if no se basa en valores de verdad o de falso Si no que se basa en opciones
 * ? nos permite tener multiples opciones y con base en la opcion seleccionada ejecutar un bloque de codigo, tiene una respuesta por default, por si la opcion ingresada no esta en la lista
 * 
 * ?Se divide en casos cada caso lleva su bloque de codigo y debe llevar al finalizar la pabra breack
 * 
 * Nota:
 * 
 * ? Template literals (Template strings)
 * todo: Expresiones (expression): Es todo aquello que genera un valor
 * * Ejemplos: una suma, usar una variable, usar una funcion, texto, numeros
 * ? Sintaxis: ` ${} `
 * todo: Declaraciones (statement): No genera valor y por lo general son estructuras de control o bucles
 * * Ejemplos: el if, el switch, el for, el while
 */

//Ejemplo
/*
let month = prompt("Escribe el mes que te gustaria ver", "Junio");

switch (month) {
    case "Enero":
        alert("El mes de Enero es el primer mes del año");
        break;
    case "Febrero":
        alert(`El mes ${month} es el segundo mes del año`);
        //Es lo mismo que concatenar  "El mes "+month+"es el segundo mes del año"
        break;
    case "Marzo":
        alert(`El mes ${month} es el tercer mes del año`);
        break;

    case "Abril":
    case "Mayo":
        console.log("Abril y Mayo");
        break;

    default:
        alert("El mes seleccionado no aplica");
}*/

/***
 * Ejercicio 
 * 1. Crear un prompt para pedirle al usuario un pais
 * 2. crear un switch con una lista de 5 paises- Josue Cano
 * 3. Dado el pais ingresado por el usuario, devolver la capital de dicho pais
 */

let pais = prompt(`Selecciona un pais
    1.Mexico
    2.EUA
    3.Peru
    4.Argentina
    5.Japon`, "Peru");

switch (pais) {
    case "Mexico":
        alert(`En el pais ${pais} es donde te encuentras ahorita mismo, terrible 🌮`);
        break;
    case "EUA":
        alert(`En el pais ${pais} es donde se habla ingles y hay un presidente naranja enojado por todo 🍊`);
        break;
    case "Peru":
        alert(`En el pais ${pais} es el que domina el feed de muchas personas por el mundo 😆`);
        break;
    case "Argentina":
        alert(`En el pais ${pais} es donde hay malos Fifas si pierden ⚽`);
        break;
    case "Japon":
        alert(`En el pais ${pais} es donde ya no hay humanos solo robots que parecen humanos, cuidado 🤖`);
        break;
    default:
        alert("El pais seleccionado no esta en la lista, terrible 🙄");
}