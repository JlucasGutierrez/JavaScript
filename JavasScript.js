// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. 

function contarCaracteres(letras) {
    return letras.length;
}

console.log(contarCaracteres("mensaje informativo"))


var texto = "mensaje informativo";
contarCaracteres(texto)
var resultado = contarCaracteres(texto);

console.log(`La palabra "${texto}" tiene ${resultado} caracteres.`);


// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function recortarTexto(cadena, longitud) {
    return cadena.slice(0, longitud);
}

console.log(recortarTexto("Devuelva el Texto",8))

var texto = "Hola Mundo";
var resultado = recortarTexto(texto,4);
console.log(`La cadena "${texto}" recortada a 4 caracteres es: ${resultado}.`);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function separarPorCaracter(cadena, separador) {
    return cadena.split(separador);
}


var texto = 'hola que tal';
var separador = ' ';
var resultado = separarPorCaracter(texto, separador);
console.log("El array resultante es:", resultado);


// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function repetirTexto(texto, veces) {
    var resultado = '';
    for (var i = 0; i < veces; i++) {
        resultado += texto + ' ';
    }
    return resultado.trim();
}

var texto = 'Hola Mundo';
var repeticiones = 10;
var resultado = repetirTexto(texto, repeticiones);
console.log(resultado);

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function invertirPalabras(cadena) {
    // Dividir la cadena en palabras, invertir cada palabra y unir las palabras nuevamente
    return cadena.split(' ').map(function(palabra) {
        return palabra.split('').reverse().join('');
    }).join(' ');
}


var texto = "Hola Mundo";
var resultado = invertirPalabras(texto);
console.log(resultado);

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

function contarRepeticiones(texto, palabra) {
    // Convertir el texto y la palabra a minúsculas para hacer la búsqueda case-insensitive
    texto = texto.toLowerCase();
    palabra = palabra.toLowerCase();

    // Dividir el texto en palabras
    var palabras = texto.split(' ');

    // Contar las repeticiones de la palabra
    var contador = 0;
    for (var i = 0; i < palabras.length; i++) {
        if (palabras[i] === palabra) {
            contador++;
        }
    }

    return contador;
}

var texto = "hola mundo adios mundo";
var palabraBuscada = "mundo";
var resultado = contarRepeticiones(texto, palabraBuscada);
console.log(`La palabra "${palabraBuscada}" se repite ${resultado} veces en el texto.`);

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

function esPalindromo(cadena) {
    // Convertir la cadena a minúsculas y eliminar espacios
    var cadenaLimpia = cadena.toLowerCase().replace(/\s/g, '');

    // Comparar la cadena original con su versión invertida
    return cadenaLimpia === cadenaLimpia.split('').reverse().join('');
}

var palabra = "casas";
var resultado = esPalindromo(palabra);
console.log(`¿${palabra} es un palíndromo? ${resultado}`);

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

function eliminarPatron(texto, patron) {
    // Utilizar una expresión regular con el patrón y g para hacer la búsqueda global
    var expresionRegular = new RegExp(patron, 'g');
    
    // Reemplazar el patrón con una cadena vacía
    var resultado = texto.replace(expresionRegular, '');

    return resultado;
}

var texto = "xyz1, xyz2, xyz3, xyz4 y xyz5";
var patron = "xyz";
var resultado = eliminarPatron(texto, patron);
console.log(resultado);

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

function obtenerNumeroAleatorio() {
    // Generar un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo)
    var numeroAleatorioDecimal = Math.random();

    // Escalar y trasladar el número al rango 1 a 100
    var numeroAleatorio = Math.floor(numeroAleatorioDecimal * 100) + 1;

    return numeroAleatorio;
}

// Ejemplo de uso:
var numeroAleatorio = obtenerNumeroAleatorio();
console.log(numeroAleatorio);

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

function esCapicua(numero) {
    // Convertir el número a cadena para facilitar la manipulación de caracteres
    var cadenaNumero = numero.toString();

    // Comparar la cadena original con su versión invertida
    return cadenaNumero === cadenaNumero.split('').reverse().join('');
}


var numero = 1221;
var resultado = esCapicua(numero);
console.log(`¿El número ${numero} es capicúa? ${resultado}`);

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function calcularFactorial(numero) {
    if (numero < 0) {
        return "No se puede calcular el factorial de un número negativo.";
    } else if (numero === 0 || numero === 1) {
        return 1;
    } else {
        var factorial = 1;
        for (var i = 2; i <= numero; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

var numero = 5;
var resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es: ${resultado}`);

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    } else {
        // Verificar si el número es divisible por algún número del 2 hasta la raíz cuadrada de dicho número
        for (var i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                return false; // El número es divisible, por lo tanto no es primo
            }
        }
        return true; // Si no se encontró ningún divisor, el número es primo
    }
}

var numero = 7;
var resultado = esPrimo(numero);
console.log(`¿El número ${numero} es primo? ${resultado}`);

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
