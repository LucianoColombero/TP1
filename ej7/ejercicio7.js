// 7.- Escriba una librería javascript que permita autocompletar la entrada de un elemento 
// input de texto que tengan clase “autocomplete”. 
// <input type=”text” class=”autocomplete”> 
// La librería debe tener en un array su propia base de datos de palabras con las que puede 
// autocompletar. 
// A medida que el usuario va agregando una letra a la caja de texto la librería debe ir 
// proponiendo las palabras cuyo comienzo coincidan con lo escrito por el usuario.

const palabras = [
  "manzana",
  "banana",
  "naranja",
  "pera",
  "uva",
  "kiwi",
  "sandía",
  "piña",
  "mango",
  "cereza",
];

const input = document.querySelector(".autocomplete");

let valorAnterior = "";

input.addEventListener("input", function () {
  const valorActual = this.value.toLowerCase();
  const agregandoTexto = valorActual.length > valorAnterior.length;

  const coincidencias = palabras.filter((palabra) =>
    palabra.startsWith(valorActual)
  );


  if (coincidencias.length > 0 && valorActual.length > 0 && agregandoTexto) {
    this.value = coincidencias[0];
    this.setSelectionRange(valorActual.length, coincidencias[0].length);
  }

  valorAnterior = this.value; 

  mostrarSugerencias(coincidencias); 
});

  
function mostrarSugerencias(sugerencias) {
    const listaSugerencias = document.querySelector(".sugerencias");
    listaSugerencias.innerHTML = ""; 
    
        if (sugerencias.length === 0) {
            listaSugerencias.innerHTML = "<li>No hay sugerencias</li>";
            return;
        }
    
        sugerencias.forEach((sugerencia) => {
            const li = document.createElement("li");
            li.textContent = sugerencia;
            listaSugerencias.appendChild(li);
        });
    }

