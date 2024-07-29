

/**
 * innerHTML
¿Qué hace?

Inserta o recupera todo el contenido HTML dentro de un elemento.
Incluye: Etiquetas HTML, texto, comentarios, etc.
Uso típico:
Crear elementos HTML dinámicamente.
Añadir o reemplazar contenido completo de un elemento.
Formatear el contenido con etiquetas HTML.

 */


// Obtener los elementos por su ID
const tituloElement = document.getElementById("titulo");
const subtituloElement = document.getElementById("subtitulo");

// Mostrar el contenido en la consola
console.log("Título:", tituloElement.textContent);
console.log("Subtítulo:", subtituloElement.textContent);


/*
textContent
¿Qué hace?

Inserta o recupera solo el contenido de texto plano de un elemento.
Excluye: Etiquetas HTML.
Uso típico:
Obtener el texto puro de un elemento para manipularlo o mostrarlo sin formato.
Añadir o reemplazar texto sin afectar el formato HTML existente.
*/
let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");

console.log("Título",titulo.innerHTML);
console.log("Subtítulo",subtitulo.innerHTML);   


//Una vez que has obtenido una referencia a un elemento HTML usando document.getElementById(), 
//puedes modificar su contenido de varias maneras.

//Modificando el contenido de un elemento
//1. Usando innerHTML:

tituloElement.innerHTML = "Nuevo título";
console.log(tituloElement.innerHTML);

subtituloElement.innerHTML = "Nuevo Subtítulo";
console.log(subtituloElement.innerHTML);
