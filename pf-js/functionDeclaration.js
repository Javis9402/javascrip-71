//declarar una funcion
function saludar() {
    console.log("Hola Mundo");
}

//Usar la funcion (invocar o llamar)
saludar();
saludar();
saludar();

//funcion con parametros'
function saludarConNombre(name, edad) {
    console.log(`hola ${name} mucho gusto en conocerte, no sabia que tenias ${edad} años`);
}

//Pasando argumentos a una funcion
saludarConNombre("Josue", 32);
saludarConNombre("Javier", 25);
saludarConNombre(27, "Daniel");

/** Funcion que returna algo
 * !importante
 * Cuando usamos return
 * !1. Termina la ejecucion de la funcion
 * !2. El valor retornado debe ser ocupado o nunca lo vamos a ver
 */

function multiplyToNumbers(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a * b;
    }
    else {
        return "Por favor envia 2 numeros";
    }
    console.log("Nunca vas a ver esto");
}

//Aqui no voy a ver nada
multiplyToNumbers(2,3);

//Imprimiendo el valor de retorno en consola para que se pueda ver
console.log(multiplyToNumbers(1,13));
console.log(multiplyToNumbers(3,"jav"));
