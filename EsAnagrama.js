/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function sonAnagramas(palabra1, palabra2) {
    if (palabra1 === palabra2) { //las palabras no deben ser iguales
        return false;
    }
    let str1 = palabra1.toLowerCase();  // Convertir las palabras a minúsculas
    let str2 = palabra2.toLowerCase();  // Convertir las palabras a minúsculas

    if (str1.length !== str2.length) { // tiene las misma cantidad de letras?
        return false;
    }
    
    let sortedStr1 = str1.split('').sort().join(''); // Ordenar los caracteres de las palabras
    let sortedStr2 = str2.split('').sort().join(''); // Ordenar los caracteres de las palabras
    
    return sortedStr1 === sortedStr2; // son iguales?
}

console.log(sonAnagramas("amor", "roma"));
console.log(sonAnagramas("aroma", "maoaa"));
console.log(sonAnagramas("juan", "julian"));
console.log(sonAnagramas("ab", "ba"));
