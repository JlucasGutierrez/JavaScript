/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function esPrimo(n) {
    // Comprueba si un número es primo.
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function Hasta100() {
    // Imprime los números primos entre 1 y 100.
    for (let num = 1; num <= 100; num++) {
        if (esPrimo(num)) {
            console.log(num);
        }
    }
}

// Llamada a la función para imprimir los números primos entre 1 y 100
Hasta100();