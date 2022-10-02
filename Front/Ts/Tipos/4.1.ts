type valor = string | number;

interface EggLayer {
    layEggs(): void;
}
interface Flyer {
    fly(height: valor): void;
}
interface Swimmer {
    swim(depth: valor): void;
}

// agregar alias de tipo(s) aqui
interface BirdLike extends EggLayer,Flyer{}
interface FishLike extends EggLayer,Swimmer{}


class Bird implements BirdLike {
    constructor(public species: valor) { }
    layEggs(): void {
        console.log('Poniendo huevos de aves.');
    }
    fly(height: valor): void {
        console.log(`Volando a la altura de ${height} metros.`);
    }
};

class Fish implements FishLike {
    constructor(public species: valor) { }
    layEggs(): void {
        console.log('Poniendo huevos de pescado.');
    }
    swim(depth: valor): void {
        console.log(`Nadando a una profundidad de ${depth} metros.`);
    }
}

function getRandomAnimal() {
    const animals = [
        new Bird('puffin'),
        new Bird('kittiwake'),
        new Fish('sea robin'),
        new Fish('leafy seadragon'),
    ];
    return animals[Math.floor(Math.random() * animals.length)];
}

function interrogateAnimal(animal = getRandomAnimal()) {
    (animal as Fish).swim(10); // se llama solo si es un pez
    (animal as Bird).fly(10); // se llama solo si es un pajaro
    return animal.species;
}
console.log('[Ejercicio 4.4]', `Tenemos un ${interrogateAnimal()} en nuestras manos!`);