/*
Manejo de Eventos
Los eventos son una parte fundamental del DOM, ya que permiten interactuar con el usuario. Ejemplos de eventos son click, mouseover, keydown, etc.

*/
//Agregar un evento a un elemento
//Para agregar un evento a un elemento, se utiliza el método addEventListener.
//  Este método recibe dos argumentos: el nombre del evento y la función que se ejecutará cuando ocurra el evento.

// Ejemplo
// En el siguiente ejemplo, se agrega un evento click al botón. Cuando el usuario haga click en el botón, se mostrará un mensaje en la consola.

const button = document.getElementById('miBoton');
button.addEventListener('click', function() {
  alert('¡Botón presionado!');
});


//Remover un evento de un elemento
//Para remover un evento de un elemento, se utiliza el método removeEventListener.
// Este método recibe dos argumentos: el nombre del evento y la función que se ejecutará cuando ocurra el evento.

// Ejemplo

// En el siguiente ejemplo, se agrega un evento click al botón. Cuando el usuario haga click en el botón, se mostrará un mensaje en la consola. Luego de 3 segundos, se removerá el evento click del botón.

const buttonr = document.querySelector('button');
buttonr.removeEventListener('click', () => {
  console.log('Click en el botón');
});

