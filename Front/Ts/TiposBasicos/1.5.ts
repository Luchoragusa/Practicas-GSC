const secuencia: number[] = Array.from(Array(10).keys());
const animales: string[] = ['pinguino', 'oso hormiguero', 'zorro', 'jirafa'];
// Defino que el arreglo puede contener números o cadenas
const cadenasYNumeros: (number | string)[] = [1, 'uno', 2, 'dos', 3, 'tres'];
// Defino que el arreglo puede contener arreglos de números o cadenas
const todosMisArreglos: (number | string)[][] = [secuencia, animales, cadenasYNumeros];

console.log('Ejercicio 1.5', todosMisArreglos);