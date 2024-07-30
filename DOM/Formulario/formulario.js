
function mostrarForm() {
    let formulario = document.getElementById('formulario');
    let texto = '';
    // Recorremos los elementos del formulario
    for (let elemento of formulario) {
        texto += ` ${elemento.value}<br>`;
    }
    document.getElementById('valoresForm').innerHTML = texto;
    console.log(texto)
}