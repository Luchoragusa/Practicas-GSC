
function add(x: string, y: string) {
    return x + y;
}

function sumArray(numbers: any[]) {
    return numbers.reduce(add, 0);
}

const someSum = sumArray(['3', '6', '9']);

console.log('[Ejercicio 3.1]', `3 + 6 + 9 === ${someSum}`);