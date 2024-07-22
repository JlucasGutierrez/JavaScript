function Contador(text) {
   
    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");  // Eliminar signos de puntuación y convertir a minúsculas
    text = text.toLowerCase();

    let palabras = text.split(/\s+/);     // Dividir el texto en palabras
    
    let Contador = {};  // Crear un objeto para almacenar el recuento de palabras

    for (let palabra of palabras) {   // Contar las palabras
        if (palabra in Contador) {
            Contador[palabra]++;
        } else {
            Contador[palabra] = 1;
        }
    }

    for (let palabra in Contador) {     // Mostrar el recuento de palabras
        console.log(palabra + ": " + Contador[palabra]);
    }
}

let text = "En un rincón del bosque, una pequeña luciérnaga brillaba con una luz tímida. Cada noche, soñaba con iluminar el cielo como las estrellas."
Contador(text);