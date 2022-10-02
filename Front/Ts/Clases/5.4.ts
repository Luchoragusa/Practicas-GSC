class Animal {
    protected name: string;
    protected constructor(name: string) { 
        this.name = name;
    }
    move(meters: number) {
        console.log(`${this.name} se movio ${meters}m.`);
    }
}

class Snake extends Animal {

    constructor(name: string) {
        super(name); // es necesario llamar al constructor del padre con `super` y le pasa el nombre
    }

    move(meters: number) {
        super.move(meters); // es necesario llamar al metodo del padre con `super` y le pasa los metros
        console.log('Deslizandose...');
    // debe invocar al metodo `move` del padre, con un deslizamiento predeterminado
    // de 5 metros
    }
}

class Pony extends Animal {

    constructor(name: string) {
        super(name);
    }

    move(meters: number) {
    super.move(meters);
    console.log('Galopando...');
        // debe invocar al metodo `move` del padre con un galope predeterminado
        // de 60 metros
    }
}

// La clase Animal no debe ser instanciable.
// Eliminar o comentar una vez que se logra el error deseado.

// const andrew = new Animal("Andrew el Animal");
// andrew.move(5);

const sammy = new Snake("Sammy la serpiente");
sammy.move(5);
// console.log(sammy.name); // debe devolver error

const pokey = new Pony("Pokey el pony");
pokey.move(60);
// console.log(pokey.name); // Should devolver error