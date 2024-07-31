//Navegar por el document , esta forma no es la mas optima.
const wrapp = document.body.children[0];
console.log(wrapp);
const div = wrapp.children[1];
console.log(div)

//FORMA RECOMENDADA:
//Obtiene un elemento en base a su ID
const wrapper = document.getElementById('wrapper');
console.log(wrapper);   

//Obtiene elementos con la clase especificada.

const links = document.getElementsByClassName('link');
console.log(links);
//Puedo indicarle la posicion del elemento que quiero que devuelva.
console.log(links[1]);


//Este metodo obtiene todos los elementos con el tagname indicado.
const divs = document.getElementsByTagName('div');
console.log(divs);

//Este metodo obtiene todos los nodos html que en sus atributos contengan el valor name especificado.
//Por lo general se utiliza para inputs. Este metodo solo se usa en el nodo raiz document.

const inputs = document.getElementsByName(`telefono`);
console.log(inputs);

//OTROS METODOS querySelector()
//Este metodo devuelve el primer elemento del selector css que ingrese(solo retorna al primer elemento).
//Este metodo es el mas versatil porque podemos buscar cualquier elemento.
//Puedo buscar por clase,id o atributo

const otherWrapper = document.querySelector('.title');
console.log(otherWrapper);


const subtitle = document.querySelector('#subtitle');
console.log(subtitle);

const atributeWrapper = document.querySelector('[class="wrapper"]');
console.log(atributeWrapper);


const linkbold = wrapper.querySelector('.link.bold');
console.log(linkbold);

//Puedo utilizar pseudoclases
const linkbolds = wrapper.querySelector('.link:last-of-type');
console.log(linkbolds);

//querySelectorAll
//Este metodo devuelve todos los elemento del selector css que ingrese(devuelve en forma de nodeList).

const allLinks = document.querySelectorAll('.link');
console.log(allLinks);
//Se utiliza en cualquier nodo, tanto en document como en otro.
const allLink = wrapper.querySelectorAll('.link');
console.log(allLink);