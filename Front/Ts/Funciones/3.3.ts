
function computeScore(word: string) {
    const letters = word.toUpperCase().split(''); // convierto a mayusculas y separo las letras
    return letters.reduce((accum, curr) => accum += getPointsFor(curr), 0); // acumulador + valor actual de la letra en el array de letras de la palabra
}

function getPointsFor(letter: string) {
    const lettersAndPoints = [
        ['AEOIULNRST', 1],
        ['DG', 2],
        ['BCMP', 3],
        ['FHVWY', 4],
        ['K', 5],
        ['JX', 8],
        ['QZ', 10],
    ];
    return lettersAndPoints.reduce((computedScore: number, pointsTuple: (string | number)[]) => { // computedScore es el acumulador, pointsTuple es el valor actual del array de arrays de letras y puntos
        const [letters, score] = pointsTuple; // desestructuro el array de arrays de letras y puntos
        if ((letters as string).split('').find((ll:string) => ll === letter)) { // si la letra actual del array de letras de la palabra se encuentra en el array de letras de la tupla actual 
            return computedScore += score as number; // sumo el puntaje de la tupla actual al acumulador
        }
        return computedScore; // si no se encuentra la letra en la tupla actual, devuelvo el acumulador sin sumar nada
    }, 0);
}

console.log('[Ejercicio 3.3]', `zoologico vale ${computeScore('zoo')} puntos)`);