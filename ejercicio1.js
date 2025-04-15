class Persona{
    #altura;
    #peso;

constructor(nombre, edad, altura, peso){
    this.nombre = nombre;
    this.edad = edad;
    this.#altura = altura;
    this.#peso = peso;
}
    getAltura(){
        return this.#altura;
    }

    getPeso(){
        return this.#peso;
    }
}


class Empleado extends Persona{
    static cantidadEmpleados = 0;
    #sueldo;

constructor(nombre, edad, altura, peso, sueldo){
    super(nombre, edad, altura, peso);
    this.#sueldo = sueldo;
    Empleado.cantidadEmpleados++;
}

    getSueldo(){
        return this.#sueldo;
    }

    static getCantidadEmpleados(){
        console.log(Empleado.cantidadEmpleados);
    }
}

const empleado1 = new Empleado("Juan", 30, 1.75, 70, 3000);
const empleado2 = new Empleado("Maria", 25, 1.65, 60, 2500);

console.log(empleado1);
console.log(empleado2);
Empleado.getCantidadEmpleados();