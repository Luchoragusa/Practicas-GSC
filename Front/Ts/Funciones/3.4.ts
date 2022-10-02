
function greet(greeting: string): string {
    return greeting.toUpperCase();
}

const defaultGreeting = greet('Hello');
const portugueseGreeting = greet('Oi como vai!');

console.log('[Ejercicio 3.4]', defaultGreeting, portugueseGreeting);