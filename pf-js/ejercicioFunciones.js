
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function adivina(numero) {
    if (numero == numSecreto) {
        console.log(`${numSecreto} es tu numero secreto`);
    } else if (numero < numSecreto) {
        console.log(`El numero es Mayor +`)
    }
    else if (numero > numSecreto) {
        console.log(`El numero es Menor  -`)
    }
}

//Juego xd

n1 = +prompt("Numero 1", 1)
n2 = +prompt("Numero 2", 10)

const numSecreto = getRandomIntInclusive(n1, n2);

let intentos = 3;
let juego;
do {
    juego = +prompt("Cual es el numero secreto", 1)
    adivina(juego)
    console.log(juego)
    console.log(`Te quedan ${intentos} Vidas`)
    intentos--;
} while (intentos > 0);
console.log(numSecreto);

