/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci(n) {
    let Sequencia = [0, 1];

    for (let i = 2; i < n; i++) {
        Sequencia[i] = Sequencia[i - 1] + Sequencia[i - 2];
    }

    return Sequencia;
}

const Sequencia10 = fibonacci(10);
console.log(Sequencia10.join(", "));

const Sequencia50 = fibonacci(50);
console.log(Sequencia50.join(", "));