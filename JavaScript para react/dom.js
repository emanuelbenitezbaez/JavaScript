/*
Selección de Elementos del DOM
1.1. Seleccionar un solo elemento
Para acceder a un único elemento, usamos métodos como getElementById, querySelector, entre otros.

*/

//getElementById(id): Selecciona un elemento por su id.
const element = document.getElementById('miElemento');


//querySelector(selector): Selecciona el primer elemento que coincide con el selector CSS.
const element1 = document.querySelector('.miClase');



/*
1.2. Seleccionar múltiples elementos
Si necesitas seleccionar más de un elemento, puedes usar getElementsByClassName, getElementsByTagName o querySelectorAll.
*/

//getElementsByClassName('miClase'): Selecciona todos los elementos con una clase específica.
const elements = document.getElementsByClassName('miClase');

//getElementsByTagName('tag'): Selecciona todos los elementos de un tipo específico.
const elements1 = document.getElementsByTagName('p');

//querySelectorAll('selector'): Selecciona todos los elementos que coinciden con el selector.
const elements2 = document.querySelectorAll('div.miClase');


/*
Manipulación de Elementos
2.1. Cambiar el contenido
Para cambiar el contenido de un elemento, puedes usar las propiedades innerText o innerHTML.
*/

//innerText: Cambia solo el texto visible.
const eleme = document.getElementById('miElemento');
eleme.innerText = 'Nuevo texto';

//innerHTML: Cambia el contenido HTML del elemento.
const eleme1 = document.getElementById('miElemento');
eleme1.innerHTML = '<p>Nuevo contenido HTML</p>';

/*
Añadir o eliminar clases
Puedes agregar o eliminar clases de un elemento usando las propiedades classList.
*/
//Añadir una clase:
const element2 = document.getElementById('miElemento');
element2.classList.add('nuevaClase');

//Eliminar una clase:
const elemen = document.getElementById('miElemento');
elemen.classList.remove('nuevaClase');

//Alternar una clase:
const ele = document.getElementById('miElemento');
ele.classList.toggle('nuevaClase');

//Comprobar si un elemento tiene una clase:
const elemento = document.getElementById('miElemento');
const hasClass = elemento.classList.contains('nuevaClase');

/**
 Crear, Modificar y Eliminar Elementos
3.1. Crear nuevos elementos
Puedes crear nuevos elementos con createElement y luego agregarlos al DOM.
 */
//Crear un nuevo elemento:
const newElement = document.createElement('div');

//Agregar el nuevo elemento al DOM:
document.body.appendChild(newElement);

//Crear un nuevo elemento con contenido:
const newElementText = document.createElement('p');
newElement.innerText = 'Nuevo párrafo';

/*
 Eliminar un elemento
Para eliminar un elemento, primero seleccionas el nodo y luego usas remove().
*/

//Eliminar un elemento:
const elementoo = document.getElementById('miElemento');  
elementoo.remove();

