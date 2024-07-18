/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function invertirCadena(texto) {
    // Inicializamos una variable para almacenar la cadena invertida
    let cadenaInvertida = "";
    
    // Iteramos sobre la cadena original de atrás hacia adelante
    for (let i = texto.length - 1; i >= 0; i--) {
        // Agregamos cada carácter al resultado
        cadenaInvertida += texto[i];
    }
    
    // Devolvemos la cadena invertida
    return cadenaInvertida;
}

const cadenaOriginal = "Hola mundoseggsg";
const cadenaInvertida = invertirCadena(cadenaOriginal);
console.log(cadenaInvertida); 