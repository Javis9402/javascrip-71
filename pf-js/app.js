/**
 * Objetos en JS (JSON)
 * Son una estructura de datos, similar  diccionarios o mapas 
 * ?Se organiza en pares
 * ? llave: valor asociado
 * Es una estructura de datos desordenada 
 * ?Aqui los datos se obtiene mediante su llave
 * !No son los mismos objetos que los de programacion orientada a obketos, las llaves no se puede repetir
 * 
 * Curiosidades
 * Esta notacion se volvio el estandar para intercambio de informacion entre cliente y servidor en la web
 * JSON (Javascript Object Notation)
 */

//Como declarar un objeto
const participante = {
    name: "Juan",
    lastName: "Memingo",
    age: "27",
    isAlave: true,
    sayHi: function () {
        console.log("Natalia dice hola")
    },
    ch: "71",
}

/**
 * Como acceder a los valores
 * 1. Notacion punto (mas usado)
 * 2. Notacion Corchete, el nombre va entre comillas como si fuera string
 */

console.log(`El nombre de la participante es  ${participante.name}, obtenido con notacion punto`);

console.log(`La edad de la participante es ${participante["age"]}, obtenido con notacion corchete`);

participante.sayHi();

//Como agregar un nuevo par llave valor
console.log(participante);
participante.favoriteAnimals = ["Tortuga", "Gato", "Cuervo"];
console.log(participante);

/**
 *? Ejercicio en clase
 * Agregar una nueva llave cuyo valor sea un objeto de direccion, el objeto debe contener por lo menos 2 pares dentro
 */
participante.direccion = {
    ciudad: "CDMX",
    alcaldia: "Xochimilco",
}
console.log(participante);

/**
 * Como accedemos a la info de objetos o arrays anidados (objetos o arrays dentro de otro objeto, u otro array)
 */

console.log(`El primer animal favorito de ${participante.name} es ${participante.favoriteAnimals[0]}`);
console.log(participante.favoriteAnimals);

console.log(`La alcaldia de ${participante.name} es ${participante.direccion.alcaldia}`); // Con Notacion Punto
console.log(`La Ciudad de ${participante["name"]} es ${participante["direccion"]["ciudad"]}`); // Con Notacion Corchete

//Como modificar el valor de una llave
participante.age = "25";
console.log(participante.age);

//Como eliminar una llave
console.log("##########################");
console.log(participante);
delete participante.ch; //Tiene Hoisting - Se Ejecuta priemero
console.log(participante);
console.log("##########################");


//Como iterar sobre el objeto
for (const llave in participante) {
    console.log(`El valor de la llave ${llave} es ${participante[llave]}`);
}

for (const llave in participante.direccion) {
    console.log(`El valor de la llave ${llave} es ${participante.direccion[llave]}`);
}



