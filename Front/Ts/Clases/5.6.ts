class Student {
    public school: string = 'Harry Herpson High School';

    constructor(private name: string) { };
    introduction() {
        console.log('[Ejercicio 5.6]', `Hola, mi nombre es ${this.name} y asisto a ${this.school}`);
    }
}

const student = new Student('Morty');
console.log(student.school);
student.introduction();