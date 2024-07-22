/**
 * 
Ejemplo de Fetch API en JavaScript
Objetivo: Obtener datos de una API externa y mostrarlos en la consola.

Paso a paso:

Definir la URL de la API: Reemplaza https://jsonplaceholder.typicode.com/posts/1 con la URL de la API que deseas consultar.
Usar la función fetch:
La función fetch recibe la URL como parámetro y devuelve una promesa.
Opcionalmente, puedes pasar un segundo parámetro con opciones de configuración para la solicitud.
Procesar la respuesta:
La promesa se resuelve con un objeto Response.
Se puede verificar si la solicitud fue exitosa usando la propiedad ok del objeto Response.
Si la solicitud fue exitosa, se puede usar el método json() para convertir el cuerpo de la respuesta a formato JSON.
El método json() también devuelve una promesa que se resuelve con los datos JSON.
Manejar errores:
Si la solicitud falla, la promesa se rechaza con un error.
Se puede usar el bloque catch para manejar el error.
Mostrar los datos:
Una vez que se obtienen los datos JSON, se pueden mostrar en la consola usando console.log().
 */

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error de solicitud');
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

  /**
   * Explicación:

En este ejemplo, se consulta la API https://jsonplaceholder.typicode.com/posts/1 que devuelve un objeto JSON con información sobre un post.
La función fetch devuelve una promesa que se resuelve con un objeto Response.
Se verifica si la solicitud fue exitosa usando la propiedad ok del objeto Response.
Si la solicitud fue exitosa, se usa el método json() para convertir el cuerpo de la respuesta a formato JSON.
El método json() también devuelve una promesa que se resuelve con los datos JSON.
Una vez que se obtienen los datos JSON, se muestran en la consola usando console.log().
Se utiliza un bloque catch para manejar cualquier error que pueda ocurrir durante la solicitud.
   */