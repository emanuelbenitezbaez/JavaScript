//Tipos de datos complejos mutables
//Mutabilidad: Los valores pueden cambiar después de ser creados. Se aplica a objetos y arrays. 
//Proporciona eficiencia y flexibilidad.

//Objeto
let usuario = {name: "Emanuel", age:100,country:"Argentina"};
 usuario.name ="Emanuels";

 console.log(usuario);

 //Arrays
 let frutas = ["Banana","Manzana", "Naranja"];
 frutas[0]= "Sandia";
 console.log(frutas);

 //Funcion

 function changeName(usuario)
 {

    usuario.name = "Paula";
    
 }
//Llamo a la funcion
 changeName(usuario);

 console.log(usuario); // { name: "Paula", age: 100, country: "Argentina" }