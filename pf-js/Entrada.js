/**
 * Prompt:
 * 1. Hay que asignar su uso a una variable para luego poder usar el valor que ingreso el usuario 
 *  1.2 Usar el valor inmediatamente
 * ! Importante 
 * 1. No se recomienda su uso en aplicaciones en produccion
 * 2. Bloquea el código, esto quiere decir que el codigo que este debajo de donde escribimos el uso del prompt no se va a ejecutar hasta que el usuarui ingrese algo
 * 3.No se puede personalizar  
 */

// Todo el texto como tal va dentro de "" si no hace referencia ninguna variable 

// const edad = prompt("Ingresa tu edad", 25);
// const nombre = prompt("Nombre", "Ej: Juan");   // el poner "" vacias significa string vacio
// console.log(edad);
// console.log("Hola soy "+ nombre + " y tengo "+edad+ " años"+"\n hola mundo"); // \n es para salto de linea 
// alert("Hola mundo soy "+nombre);

const nombrePelioSerie = prompt("Ingresa tu serie o pelicula favorita", "LEGO La pelicula");
const nombrePersonaje = prompt ("Personaje favorito de la serie o pelicula");
const explicacionDeEleccion = prompt ("Porque es tu personaje favorito");

console.log (nombrePelioSerie+" es mi favorita en especial \n"+ nombrePersonaje+" es mi personaje favorito porque "+ explicacionDeEleccion);