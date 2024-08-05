
const wrapper = document.querySelector('#wrapper');
const title = document.querySelector('.title');
const anchor = document.querySelector('.link.bold');
console.log(anchor);
const input = document.querySelector('[type="number"]');
console.log(input);

//Permite modificar el dom , tener cuidado al usar innerHTML porque se puede introducir codigo malicioso.
//Para modificar el texto usar otro metodo tipo textcontent.

wrapper.innerHTML = `
<h2>He sobreescrito el DOM</h2>

`

    
//Get atribute. para obtener y modificar atributos que no estan como propiedades de los elmentos.
//Si no existe el atributo, retorna null.
console.log(anchor.getAttribute("href"));

// Set atribute . Permite agregar atributos.
//Este metodo tiene 2 parametros. El primero es el elemento a sobreescribir.
//El segundo parametro es el valor que va a recibir.

console.log(title.setAttribute("title", "encabezado"));

//////////////
//SET ATRIBUTE PERMITE AGREGAR UN NUEVO ATRIBUTO O REEMPLAZAR EL ANTERIRO.
let imagen = document.querySelector('img');

imagen.src = "https://images7.alphacoders.com/943/943484.jpg"

imagen.setAttribute("alt","imagen-spiderman");
imagen.setAttribute("class","img");
imagen.setAttribute("id","img-spiderman");

//HAS ATTRIBUTE : DEVUELVE TRUE SI ESTE NODO ELEMENTO TIENE UN ATRIBUTO EN ESPECIFICO.

console.log(imagen.hasAttribute("alt"));

//REMOVE ATTRIBUTE : BORRA EL ATRIBUTO ESPECIFICADO.

imagen.removeAttribute("alt");

//ATRIBUTOS PERSONALIZADOS

let image = document.querySelector('[data-identificador=img] ');
let figcaption = document.querySelector('figcaption');
image.src = "https://images7.alphacoders.com/943/943484.jpg"

const textoMostrar = image.getAttribute('data-texto-mostrar');
figcaption.textContent = textoMostrar;



