/**
 * Condicionales
 * Serie de condiciones para que algo suceda
 * 
 * En programacion para el manejo de estas condiciones tenemos
 * ! El bloque if else (rombo en diagrama de flujo)
 * ? Bloque if pregunta por una condicion en caso de que esta condicion sea verdadera ejecuta un bloque de codigo, en caso falso no ejecuta nada
 * ? else maneja la ejecucion de codigo en caso negativo
 * 
 * lo que se coloca dentro de if, debe ser algo que genere 
 * *un valor True o False (Tipo bolean)
 */

/**
 * Convertir de texto a numero
 * !importante 
 * Si se trata de convertir algo que no es un numero como resultado obtendremos NaN (Not a Number)
 *  */

// const birthYear = prompt("Ingresa tu fecha de nacimiento");
// Hacer la converion dentro del prompt tambien es posible
// const birthYear = Number(prompt("Ingrese su fecha de nacimiento"));
// let birthYearPlusTen = Number(birthYear) +10;
// console.log (birthYear);
// console.log (birthYearPlusTen);

const birthYear = Number(prompt("Ingresa tu fecha de nacimiento"));
const age = 2026-birthYear;
console.log ("Tu edad es: "+ age)

/**
 * Todo Operadores Logicos
 * Sirven para hacer operaciones cuyo resultado es verdadero o falso
 * == es el simbolo de igualdad en programacion
 * Mayor que >
 * 2 > 1 == Verdadero 
 * 1 > 2 == Falso
 * 0 > 0 == Falso (es igual)
 * 
 * Menor que <
 * 2 < 1 == Falso
 * 3 < 5 == Verdadero
 * 2 < 2 = Falso
 * 
 * Comparador de igualdad ==
 * 2 == 2 === Verdadero
 * 3 == 1 == Falso 
 * 
 * Mayor o igual que >=
 * 2 >= 2 == Verdadero
 * 2 >= 1 == Verdadero
 * 2 >= 3 = Falso
 * 
 * Menor o igual que <=
 * 4 <= 4 == Verdadero
 * 4 <= 5 == Verdadero
 * 7<= 5 == Falso
 * 
 * Diferente de !=
 * 5 != 4 == Verdadero
 * 5 != 5 == Falso
 * 99 != 100 == Verdadero
 * 
 * Negacion (not) ! 
 * !Verdadero == Falso
 * !Falso == Verdadero
 * !(4 <= 4 == Verdadero) == Falso
 * 
 * AND && Es un operador que devuelve
 * ?Verdadero solo si ambos lados de la expresion son verdaderos
 * ? Si un lado es falso todo el resultado se vuelve falso
 * Verdadero && Verdadero == Verdadero 
 * Verdadero && Falso == Falso
 * Falso && Verdadero == Falso
 * age >= 6 && age <= 12
 * age == 7  - Verdadero
 * age == 15 - Falso
 * age == 5 - Falso
 * 
 * 
 * Or || Es un operador que devuelve 
 * ?Falso si ambos lados de la expresion es falso
 * ?Si un lado de la expresion es verdadero devuelve verdadero
 * Verdadero || Falso == Verdadero
 * Falso || Verdadero == Verdadero
 * Falso || Falso ==  Falso
 * 
 * age > 20 || age <100
 * age == 101 - Verdadero
 * age == 20 - Verdadero
 */

/**
 * Dentro de los parentesis va la condicion que se va a evaluar 
 * Dentro de las llaves va el codigo que se va a ejecutar en caso
 * de que la condicion sea verdadero 
 */

if (age >= 18){
    alert ("Bienvenido eres mayor de edad 👍");
}
else if (age >=6) {
 alert(" Felicidades entraste en la primaria")
}
else if (age >= 1){
    alert("Felicidades estas en el quinder")
}
else {
    alert ("Aun no puedes pasar, eres muy chiquito o no haz nazido");
}
