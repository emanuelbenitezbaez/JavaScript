async function enviarDatos(url, datos) {
    try {
      const response = await fetch(url, {
        method: 'POST', // Tipo de solicitud
        headers: {
          'Content-Type': 'application/json' // Tipo de contenido del body
        },
        body: JSON.stringify(datos) // Datos en formato JSON
      });
      if (response.ok) {
        const respuestaServidor = await response.json();
        console.log("Respuesta del servidor:", respuestaServidor);
      } else {
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error general:", error);
    }
  }
  
  const datos = {
    nombre: 'Juan Pérez',
    email: 'juanperez@example.com'
  };
  
  enviarDatos('https://mi-api.com/usuarios', datos);

  /**
   * Explicación:

Se define una función asíncrona enviarDatos que recibe la URL de la API y los datos a enviar como parámetros.
Se utiliza fetch para realizar la solicitud POST a la URL.
Se especifican las opciones de la solicitud:
method: 'POST': Indica que es una solicitud POST.
headers: Se establece el encabezado Content-Type para indicar que el body es JSON.
body: Se envía el body de la solicitud en formato JSON usando JSON.stringify().
Se espera la respuesta usando await.
Se verifica si la solicitud fue exitosa (response.ok).
Si la solicitud fue exitosa, se convierte el body de la respuesta a JSON (response.json()) y se muestra en la consola.
Si la solicitud falla, se muestra el código de error (response.status).
Se utiliza try...catch para manejar errores generales.

   */