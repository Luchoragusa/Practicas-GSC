

const elementoInventario: (number | string)[] = ['tuerca', 11];

// despues lo desestructuramos
const [nombre, cantidad] = elementoInventario;
const mensaje = agregarInventario(nombre as string, cantidad as number);
console.log('[Ejercicio 1.6]', mensaje);

function agregarInventario(nombre: string, cantidad: number): string {
    return `Se agregaron ${cantidad} ${nombre}s al inventario.`;
}