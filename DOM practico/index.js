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
