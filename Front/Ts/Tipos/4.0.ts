

function doStuff(value: any): void {
    if (typeof value === 'string') { // El === es para comparar el tipo de dato
        console.log(value.toUpperCase().split('').join(' '));
    } else if (typeof value === 'number') {
        console.log(value.toPrecision(5)); // toPrecision es para limitar la cantidad de decimales
    }
        value; // coloque el cursor sobre `valor` aqui
}

doStuff(2);
doStuff(22);
doStuff(222);
doStuff('hello');
doStuff(true);
doStuff({});
console.log('[Ejercicio 4.1]');