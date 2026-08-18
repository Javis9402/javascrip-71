/* console.log("Hola mundo") */ 
/* 
En javascrip hay 3 formas de declarar variables
! Existe una forma que ya no se recomiendo su uso
! var
Al proceso de crear una variable y darle un valor se le llama asignacion 

A las varibales que pueden ser reasignadas (pueden cambiar en el futuro el valor que tiene) se declara
?let nombreVariable = valor;

*el operador = se conoce como operador de asignacion 

? En java scrip el ; es opcional pero en java es obligatorio 

Una vez creada una varibale podemos usarla en otros lugares del código utilizando su nombre, las variables al ser utlizadas no van entre "" 
Las variables que no pueden ser reasignadas (su valor no cambia) 
se declaran
! const nombreVariable = valor;
Notas: Palabras reservadas: Son palabras que utiliza el lenguaje de programacion y si intentamos usarlas en otros lados pueden generar errores.
*/

let nombre = "Javier"; //tipo string
console.log(nombre);
const birthYear = 2001; // tipo numero
console.log (birthYear);

/* Reasignando una variable (cambiando el valor que tiene) 
Cuando reasignamos una variable (una varibale ya creada)
!Ya no es necesario poner el let
*/

nombre2 = "Jose Cano";
console.log(nombre);

/* seccion de prueba
birthYear=1995;
*/

/**
 *? Concatenar
 * Nos permite pegar el valor de una variable a un texto
 */

console.log ("hola soy " + nombre + " y estoy en gen con "+nombre2+" naci en el año: "+birthYear)

