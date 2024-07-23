/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

function DecimalABinary(decimal) {
    let binario = '';
    
    if (decimal === 0) {
        return '0';
    }
    
    while (decimal > 0) {
        let resto = decimal % 2;
        binario = resto + binario;
        decimal = Math.floor(decimal / 2);
    }
    
    return binario;
}

let numeroDecimal = 30;
let numeroBinario = DecimalABinary(numeroDecimal);


console.log(`El número decimal ${numeroDecimal} en binario es ${numeroBinario}`);