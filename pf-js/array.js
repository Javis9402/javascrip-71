/**
 * Estructuras de Datos
 * Que son? y porque son importantes?
 * 
 * Son estructuras que nos ayudan a agrupar y/o ordenar datos para manipular estos datos de manera más eficiente, datos no representa nda por si lo datos juntos y dandoles contexto se vuelve informacion
 * 
 * * Array
 * Es una estructura de datos ordenda
 * !importante
 * Los datos se indentifican por un indice, el indice empieza a contrar desde 0
 * el tamaño real se cuenta desde el 1
 * 
 * !Importante pero particular de JS
 * Podemos guardar culquier tipo de dato dentro del array, incluso combinaciones, tienen tamaño dinamico
 */

//Definicion de un array
const arrayVacio = [];
const arrayContenido = ["Andres", 20, true];
const months = ["Jan", "March", "April", "June"];

/**
 * Obtencion de un elemento guardado en un array
 * Notacion corchete
 */

console.log(arrayContenido[1]);
console.log(arrayContenido[0]);
console.log(arrayContenido[3]);

/**
 * Ingresar datos al array
 * Metodos
 * 1. Unshift para ingresar elementos al comienzo del array 
 * 2.Push para ingresar elementos al final del array
 */

//Unshift
console.log("Array Antes: " + arrayContenido);
arrayContenido.unshift("Javier")
console.log("Array Despues: " + arrayContenido);

// push
console.log("Array Antes: " + arrayContenido);
arrayContenido.push("Daniel amigo", 28);
console.log("Array Despues: " + arrayContenido);

/**
 * Eliminar datos
 * 1. Shift elimina y devuelve el elemento en la posicion 0
 * 2. Pop elimina y devuelve el ultimo elemento del array
 * Nota:
 * lo que va dentro de los parentesis de un metodo o funcion se conoce como argumento
 */

//Shift
console.log("Array Antes: " + arrayContenido);
// arrayContenido.shift(); elimina el contenido y lo devuelve
// console.log ("Elemento eliminado: "+ arrayContenido.shift());
console.log(`Elemento eliminado: ${arrayContenido.shift()}`);
console.log("Array Despues: " + arrayContenido);

// Pop
console.log("Array Antes: " + arrayContenido);
console.log(`Elemento eliminado: ${arrayContenido.pop()}`);
console.log("Array Despues: " + arrayContenido);

// Reasignar el valor de un indice
let valorAnterior = arrayContenido[0];
arrayContenido[0] = "Liz";
arrayContenido[2] = "Josue";

console.log(`El valor anterior era: ${valorAnterior}
    El resultado de la reasignacion de un elemento ${arrayContenido}`);
console.log(arrayContenido);

/**Splice 
 * Elimina elementos o Agrega elementos en cualquier posicion del arreglo
 * 
 * Splice tiene 3 partes que van dentro del parentesis
 * splice(1,2,3)
 * 1. Indica la posicion donde va a inciar a eliminar o agregar
 * 2. Cuandos elementos va a eliminar
 * 3. Son los elementos a agregar
 */

console.log(`========= Splice ==============`);
console.log(arrayContenido);
arrayContenido.splice (1,1);
console.log(arrayContenido);
arrayContenido.splice (1,2);
console.log(arrayContenido);

//Agregar elementos
console.log(months);
months.splice(3,0,"Mar");
console.log(months);
months.splice(5,0,"Javi");
console.log(months);