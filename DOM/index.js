

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

console.log("Título", titulo.innerHTML);
console.log("Subtítulo", subtitulo.innerHTML);


//Una vez que has obtenido una referencia a un elemento HTML usando document.getElementById(), 
//puedes modificar su contenido de varias maneras.

//Modificando el contenido de un elemento
//1. Usando innerHTML:

tituloElement.innerHTML = "Nuevo título";
console.log(tituloElement.innerHTML);

subtituloElement.innerHTML = "Nuevo Subtítulo";
console.log(subtituloElement.innerHTML);


//selecciona todos los elementos de un documento HTML que coincidan con un nombre de etiqueta específico.

// Seleccionamos todos los elementos <p> del documento y los almacenamos en la variable 'parrafos'
const parrafos = document.getElementsByTagName('p');

// Imprimimos en la consola la cantidad total de párrafos encontrados
console.log(`Cantidad de Elementos: ${parrafos.length}`);

// Recorremos cada párrafo utilizando un bucle for
for (let i = 0; i < parrafos.length; i++) {
    // Imprimimos el índice del párrafo y su contenido HTML
    console.log(`Indice : ${i} - ${parrafos[i].innerHTML}`);
}
/**
 
 
¿Qué hace getElementsByClassName()?

Esta función de JavaScript te permite seleccionar y manipular elementos HTML que comparten una clase específica. 
Es decir, si tienes varios elementos con la misma clase, puedes usar esta función para agruparlos y
 realizar acciones sobre ellos de manera conjunta.
 */

// Seleccionamos todos los elementos con la clase "destacado"
const elementosDestacados = document.getElementsByClassName("destacado");

// Recorremos cada elemento usando un for
for (let i = 0; i < elementosDestacados.length; i++) {
    // Imprimimos el índice del elemento y su contenido HTML
    console.log(`Elemento destacado : ${i} - ${elementosDestacados[i].innerHTML}`);
}
//Tambien podemos usar for of :
for (let elemento of elementosDestacados) {
    console.log(elemento.innerHTML);
}

/**
 * querySelectorAll(): Seleccionando múltiples elementos con CSS.

¿Qué hace querySelectorAll()?

En JavaScript, el método querySelectorAll() es una herramienta para seleccionar múltiples
 elementos de un documento HTML utilizando selectores CSS.
A diferencia de getElementsByClassName(), que solo busca por clases, querySelectorAll()
te permite realizar búsquedas mucho más precisas y flexibles.
 */

 // Seleccionamos todos los elementos con la clase "item"
 const items = document.querySelectorAll(".item");


 console.log("Elementos clase item:");
 //Recorremos los elementos de la clase item guardados en items e imprimimos.
 items.forEach(item => {
    
     console.log(item.innerHTML);
 });

 // Seleccionamos los elementos "item" que también tienen la clase "relevante"
 const itemsDestacados = document.querySelectorAll(".item.relevante");

 console.log("Elementos clase item que tambien tienen la clase relevante:");
 //Recorremos los elementos de la clase item  guardados en itemsDestacados e imprimimos.
 itemsDestacados.forEach(item => {
     console.log(item.innerHTML);
 });