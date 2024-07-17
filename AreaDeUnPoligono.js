/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function calcularArea(poligono) {
    const { tipo, base, altura, lado } = poligono;

    switch (tipo) {
        case 'triangulo':
            return (base * altura) / 2;
        case 'cuadrado':
            return lado * lado;
        case 'rectangulo':
            return base * altura;
        default:
            throw new Error('Tipo de polígono no soportado');
    }
}

const triangulo = { tipo: 'triangulo', base: 100, altura: 5 };
const cuadrado = { tipo: 'cuadrado', lado: 4 };
const rectangulo = { tipo: 'rectangulo', base: 8, altura: 3 };

console.log(`Área del triángulo: ${calcularArea(triangulo)}`); // 250
console.log(`Área del cuadrado: ${calcularArea(cuadrado)}`);   //  16
console.log(`Área del rectángulo: ${calcularArea(rectangulo)}`); //  24
