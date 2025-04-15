class Persona {
    constructor(nombre, edad, dni, altura, peso) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.altura = altura;
        this.peso = peso;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
}

persona1 = new Persona("Juan", 25, "12345678A", 1.75, 70);
persona2 = new Persona("Ana", 30, "87654321B", 1.65, 60);
persona3 = new Persona("Luis", 28, "11223344C", 1.80, 80);
persona4 = new Persona("Maria", 22, "44332211D", 1.70, 55);
persona5 = new Persona("Pedro", 35, "55667788E", 1.85, 90);

let listaPersonas = [persona1, persona2, persona3, persona4, persona5];

function mostrarPersonas() {
    for (let i = 0; i < listaPersonas.length; i++) {
        console.log(`Nombre: ${listaPersonas[i].nombre}, Edad: ${listaPersonas[i].edad}, DNI: ${listaPersonas[i].dni}, Altura: ${listaPersonas[i].altura}, Peso: ${listaPersonas[i].peso}, IMC: ${listaPersonas[i].calcularIMC().toFixed(2)}`);
    }
}

mostrarPersonas();