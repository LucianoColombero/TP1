
/*
6.- dado el siguiente objeto: 

Para cada punto realice una función flecha que retorne: 

a.- los datos de la persona 3 
b.- Un array con todos los datos (solo el detalle, no el id) 
c.- Un array de las personas mayores a 24 años 
d.- Un array de personas ordenado por el nombre de la persona 
e.- Un array de personas que al menos tenga 2 hobbies 
f.- Un array con todos los diferentes hobbies que existen en personas 
g.- Un array de los nombres de personas que sean empleados.  
*/

const personas = [ 
  { 
    id: 1, 
    datos: { 
      nombre: "Jose", 
      edad: 39, 
      empleado: true, 
      hobbies: ["tenis"], 
    }, 
  }, 
  { 
    id: 2, 
    datos: { 
      nombre: "Manuel", 
      edad: 23, 
      empleado: true, 
    }, 
  }, 
  { 
    id: 3, 
    datos: { 
      nombre: "Abigail", 
      edad: 25, 
      empleado: false, 
      hobbies: ["basquet", "tenis", "futbol"], 
    }, 
  }, 
  { 
    id: 4, 
    datos: { 
      nombre: "Fabiana", 
      edad: 12, 
      empleado: true, 
      hobbies: ["tenis", "golf"], 
    }, 
  }, 
]; 
 
// a.- los datos de la persona 3
// const persona3 = () => {
//     return personas[2].datos;
// };

// console.log(persona3());

// b. - Un array con todos los datos (solo el detalle, no el id)
// personas.forEach((persona) => {
//     console.log(persona.datos.nombre);
//     console.log(persona.datos.edad);
//     console.log(persona.datos.empleado);
//     console.log(persona.datos.hobbies); 
// });

/// c.- Un array de las personas mayores a 24 años

// const mayoresDe24 = () => {
//   return personas.filter((persona) => persona.datos.edad > 24).forEach((persona) => {
//     console.log("-----------------------");
//     console.log(persona.datos.nombre + " " + persona.datos.edad + " años");
//     console.log("-----------------------");
//   });
// }
// console.log(mayoresDe24());

/// d.- Un array de personas ordenado por el nombre de la persona

// const ordenadosPorNombre = () => {
//   return personas.sort((a, b) => a.datos.nombre.localeCompare(b.datos.nombre)).forEach((persona) => {
//     console.log("-----------------------");
//     console.log(persona.datos.nombre);
//     console.log("-----------------------");
//   }
//   );  
// }
// console.log(ordenadosPorNombre());

/// e.- Un array de personas que al menos tenga 2 hobbies

// const personasConDosHobbies = () => {
//   return personas.filter((persona) => {
//     if (persona.datos.hobbies) {
//       return persona.datos.hobbies.length >= 2;
//     }
//   }).forEach((persona) => {
//     console.log("-----------------------");
//     console.log(persona.datos.nombre + " tiene " + persona.datos.hobbies.length + " hobbies.");
//     console.log("-----------------------");
//   });
// }
// console.log(personasConDosHobbies());

/// f.- Un array con todos los diferentes hobbies que existen en personas

// const personasConHobbies = () => {
//   const hobbies = personas.map((persona) => persona.datos.hobbies).flat();
//   const hobbiesUnicos = [...new Set(hobbies)];
//   return hobbiesUnicos;
// };
// const hobbiesUnicos = personasConHobbies();
// hobbiesUnicos.forEach((hobby) => {
//   console.log("-----------------------");
//   console.log(hobby);
//   console.log("-----------------------");
// });

// g.- Un array de los nombres de personas que sean empleados.

// const empleados = () => {
//   return personas
//   .filter((persona) => persona.datos.empleado === true)
//   .map((persona) => persona.datos.nombre);
// };
// const listaEmpleados = empleados();
// console.log(listaEmpleados);
