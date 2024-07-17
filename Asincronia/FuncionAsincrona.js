//FUNCION ASINCRONA:

async function saludar() {
    return "Holi";
}
console.log(saludar());

saludar().then((res) => {
    console.log(res);
});
