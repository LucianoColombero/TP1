let libros = []; // Este array se llenará con los datos del JSON

// Cargar los libros desde el archivo JSON
fetch('ejercicio5.json')
    .then(response => {
        if (!response.ok) throw new Error("No se pudo cargar el archivo JSON");
        return response.json();
    })
    .then(data => {
        libros = data;
        mostrarLibros();
    })
    .catch(error => console.error("Error al cargar los libros:", error));

// Mostrar libros en pantalla
function mostrarLibros() {
    const contenedor = document.getElementById("libros-Container"); 
    contenedor.innerHTML = "";

    libros.forEach((libro) => {
        contenedor.innerHTML += `
            <p><strong>${libro.name || libro.titulo}</strong> - ${libro.author || libro.autor} (${libro.anio || ''})</p>
        `;
    });
}


// Agregar nuevo libro al array (pero no al archivo original, eso requiere backend)
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    const nuevoLibro = {
        titulo: document.getElementById("titulo").value,
        autor: document.getElementById("autor").value,
        anio: parseInt(document.getElementById("anio").value)
    };

    libros.push(nuevoLibro); // Lo agregás en memoria
    mostrarLibros(); // Volvés a mostrar todo
    this.reset(); // Limpiás el formulario
});
